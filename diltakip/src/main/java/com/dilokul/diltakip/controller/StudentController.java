package com.dilokul.diltakip.controller;

import com.dilokul.diltakip.model.Student;
import com.dilokul.diltakip.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
