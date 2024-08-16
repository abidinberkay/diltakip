package com.dilokul.diltakip.service;

import com.dilokul.diltakip.model.dto.ClassDto;
import com.dilokul.diltakip.model.dto.TeacherDto;
import com.dilokul.diltakip.model.entity.Class;
import com.dilokul.diltakip.model.entity.Teacher;
import com.dilokul.diltakip.repository.ClassRepository;
import com.dilokul.diltakip.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ClassService {

    private final ClassRepository classRepository;
    private final ModelMapper modelMapper;
    private final TeacherRepository teacherRepository;

    public ClassDto addClass(ClassDto classDto) {
        // Map DTO to entity
        Class classEntity = modelMapper.map(classDto, Class.class);

        // Save the entity to the database
        Class savedClass = classRepository.save(classEntity);

        // Convert the saved entity back to DTO
        return modelMapper.map(savedClass, ClassDto.class);
    }

    public Page<ClassDto> findAllAsPage(Pageable pageable) {
        Page<Class> classPage = classRepository.findAll(pageable);
        return classPage.map(classEntity -> modelMapper.map(classEntity, ClassDto.class));
    }

    public Page<ClassDto> findAllAsPage(String filter, Pageable pageable) {
        Page<Class> classPage;

        if (filter == null || filter.isEmpty()) {
            classPage = classRepository.findAll(pageable);
        } else {
            classPage = classRepository.findByNameContainingIgnoreCaseOrLanguageContainingIgnoreCase(
                    filter, filter, pageable);
        }

        // Map each Class entity to ClassDto and populate teacherDto
        return classPage.map(classEntity -> {
            ClassDto classDto = modelMapper.map(classEntity, ClassDto.class);

            // Fetch the Teacher entity and map it to teacherDto
            Teacher teacher = teacherRepository.findById(classEntity.getTeacherId())
                    .orElse(null);

            if (teacher != null) {
                classDto.setTeacherDto(modelMapper.map(teacher, TeacherDto.class));
            }

            return classDto;
        });
    }


    @Transactional
    public ClassDto findClassById(Long id) throws Exception {
        Class classEntity = classRepository.findById(id)
                .orElseThrow(() -> new Exception("Class not found with id: " + id));

        return modelMapper.map(classEntity, ClassDto.class);
    }

    @Transactional
    public ClassDto updateClass(Long id, ClassDto classDto) throws Exception {
        Class existingClass = classRepository.findById(id)
                .orElseThrow(() -> new Exception("Class not found with id: " + id));

        // Map updated fields from DTO to the existing entity
        modelMapper.map(classDto, existingClass);

        Teacher teacherToBeAdded = teacherRepository.findById(classDto.getTeacherId()).get();

        existingClass.setTeacherId(teacherToBeAdded.getId());

        // Save the updated class
        Class updatedClass = classRepository.save(existingClass);

        // Convert updated entity back to DTO
        return modelMapper.map(updatedClass, ClassDto.class);
    }

    @Transactional
    public void deleteClass(Long id) throws Exception {
        if (!classRepository.existsById(id)) {
            throw new Exception("Class not found with id: " + id);
        }
        classRepository.deleteById(id);
    }
}
