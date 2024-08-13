package com.dilokul.diltakip.service;

import com.dilokul.diltakip.model.dto.ClassDto;
import com.dilokul.diltakip.model.dto.StudentDto;
import com.dilokul.diltakip.model.entity.Class;
import com.dilokul.diltakip.model.entity.Student;
import com.dilokul.diltakip.model.entity.StudentClass;
import com.dilokul.diltakip.repository.ClassRepository;
import com.dilokul.diltakip.repository.StudentClassRepository;
import com.dilokul.diltakip.repository.StudentRepository;
import com.dilokul.diltakip.enums.CityEnum;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;
    private final ModelMapper modelMapper;
    private final ClassRepository classRepository;
    private final StudentClassRepository studentClassRepository;

    public Page<Student> findAllAsPage(Pageable pageable) {
        return studentRepository.findAll(pageable);
    }

    public Page<Student> findAllAsPage(String filter, Pageable pageable) {
        if (filter == null || filter.isEmpty()) {
            return studentRepository.findAll(pageable);
        }

        Page<Student> result;

        try {
            CityEnum cityEnumFilter = CityEnum.valueOf(filter.toUpperCase());
            result = studentRepository.findByCity(cityEnumFilter, pageable);
        } catch (IllegalArgumentException e) {
            result = studentRepository.findByNameContainingIgnoreCaseOrSurnameContainingIgnoreCaseOrAddressContainingIgnoreCaseOrPhoneContainingIgnoreCase(
                    filter, filter, filter, filter, pageable);
        }

        return result;
    }

    public StudentDto findStudentById(Long id) throws Exception {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new Exception("Student not found with id: {}" + id));

        StudentDto studentDto = modelMapper.map(student, StudentDto.class);
        List<StudentClass> studentClassList = studentClassRepository.findAllByStudentId(student.getId());
        List<Class> classList = new ArrayList<>();
        if (studentClassList.size() > 0) {
            for(StudentClass studentClazz : studentClassList) {
                classList.add(classRepository.findById(studentClazz.getClassId()).orElse(null));
            }
        }
        List<ClassDto> classDtoList = classList.stream()
                .map(classEntity -> modelMapper.map(classEntity, ClassDto.class))
                .collect(Collectors.toList());

        studentDto.setClassDtoList(classDtoList);
        return studentDto;
    }

    @Transactional
    public StudentDto updateStudent(Long id, StudentDto studentDto) throws Exception {
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new Exception("Student not found with id: " + id));

        // Map updated fields from DTO to the existing entity
        modelMapper.map(studentDto, existingStudent);

        // Save the updated student
        Student updatedStudent = studentRepository.save(existingStudent);

        // Convert updated entity back to DTO
        StudentDto updatedStudentDto = modelMapper.map(updatedStudent, StudentDto.class);

        // Optionally, update related classes or other entities if needed
        // ...

        return updatedStudentDto;
    }
}
