package com.dilokul.diltakip.service;

import com.dilokul.diltakip.enums.CityEnum;
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

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TeacherService {

    private final TeacherRepository teacherRepository;
    private final ModelMapper modelMapper;
    private final ClassRepository classRepository;

    public Page<Teacher> findAllAsPage(String filter, Pageable pageable) {
        if (filter == null || filter.isEmpty()) {
            return teacherRepository.findAll(pageable);
        }

        // Implement filtering logic
        return teacherRepository.findByNameContainingIgnoreCaseOrSurnameContainingIgnoreCaseOrPhoneContainingIgnoreCase(
                filter, filter, filter, pageable);
    }

    public TeacherDto findTeacherById(Long id) throws Exception {
        Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new Exception("Teacher not found with id: " + id));

        TeacherDto teacherDto = modelMapper.map(teacher, TeacherDto.class);
        List<Class> classList = classRepository.findAllByTeacherId(teacher.getId());

        List<ClassDto> classDtoList = classList.stream()
                .map(classEntity -> modelMapper.map(classEntity, ClassDto.class))
                .collect(Collectors.toList());

        teacherDto.setClassDtoList(classDtoList);
        return teacherDto;
    }

    @Transactional
    public TeacherDto updateTeacher(Long id, TeacherDto teacherDto) throws Exception {
        Teacher existingTeacher = teacherRepository.findById(id)
                .orElseThrow(() -> new Exception("Teacher not found with id: " + id));

        // Map updated fields from DTO to the existing entity
        modelMapper.map(teacherDto, existingTeacher);

        // Save the updated teacher
        Teacher updatedTeacher = teacherRepository.save(existingTeacher);

        // Convert updated entity back to DTO
        TeacherDto updatedTeacherDto = modelMapper.map(updatedTeacher, TeacherDto.class);

        // Optionally, update related classes or other entities if needed
        // ...

        return updatedTeacherDto;
    }

    public List<TeacherDto> findAll() {
        List<Teacher> teachers = teacherRepository.findAll();

        return teachers.stream()
                .map(teacher -> modelMapper.map(teacher, TeacherDto.class))
                .collect(Collectors.toList());
    }
}
