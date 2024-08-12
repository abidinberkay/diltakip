package com.dilokul.diltakip.controller;

import com.dilokul.diltakip.model.dto.StudentDto;
import com.dilokul.diltakip.model.entity.Student;
import com.dilokul.diltakip.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/student")
public class StudentController {

    private final StudentService studentService;

    @GetMapping("/page")
    public ResponseEntity<Page<Student>> findAllByPage(
            @RequestParam(required = false) String filter,
            Pageable pageable) {
        return ResponseEntity.ok(studentService.findAllAsPage(filter, pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<StudentDto> findById(@PathVariable Long id) throws Exception {
        StudentDto studentDto = studentService.findStudentById(id);
        return ResponseEntity.ok(studentDto);
    }
}
