//package com.dilokul.diltakip.mappers;
//
//import com.dilokul.diltakip.model.dto.ClassDto;
//import com.dilokul.diltakip.model.dto.StudentDto;
//import com.dilokul.diltakip.model.dto.TeacherDto;
//import com.dilokul.diltakip.model.entity.Class;
//import com.dilokul.diltakip.model.entity.Student;
//import com.dilokul.diltakip.model.entity.Teacher;
//import org.modelmapper.ModelMapper;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageImpl;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Service
//public class StudentMapper {
//
//    private final ModelMapper modelMapper;
//
//    public StudentMapper(ModelMapper modelMapper) {
//        this.modelMapper = modelMapper;
//    }
//
//    public Page<StudentDto> mapStudentPage(Page<Student> studentPage) {
//        List<StudentDto> studentDtoList = studentPage.getContent().stream()
//                .map(this::mapStudentToStudentDto)
//                .collect(Collectors.toList());
//
//        return new PageImpl<>(studentDtoList, studentPage.getPageable(), studentPage.getTotalElements());
//    }
//
//    private StudentDto mapStudentToStudentDto(Student student) {
//        StudentDto studentDto = modelMapper.map(student, StudentDto.class);
//
//        // Populate classDto
//        if (student.getStudentClass() != null) {
//            studentDto.setClassDto(mapClassToClassDto(student.getStudentClass()));
//        }
//
//        // Populate teacherDto
//        if (student.getStudentClass() != null && student.getStudentClass().getTeacher() != null) {
//            studentDto.setTeacherDto(mapTeacherToTeacherDto(student.getStudentClass().getTeacher()));
//        }
//
//        return studentDto;
//    }
//
//    private ClassDto mapClassToClassDto(Class studentClass) {
//        ClassDto classDto = modelMapper.map(studentClass, ClassDto.class);
//
//        // Populate teacherDto in classDto
//        if (studentClass.getTeacher() != null) {
//            classDto.setTeacherDto(mapTeacherToTeacherDto(studentClass.getTeacher()));
//        }
//
//        return classDto;
//    }
//
//    private TeacherDto mapTeacherToTeacherDto(Teacher teacher) {
//        return modelMapper.map(teacher, TeacherDto.class);
//    }
//}