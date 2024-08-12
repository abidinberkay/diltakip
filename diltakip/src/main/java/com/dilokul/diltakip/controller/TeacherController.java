package com.dilokul.diltakip.controller;

import com.dilokul.diltakip.model.entity.Teacher;
import com.dilokul.diltakip.service.TeacherService;
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
@RequestMapping("/teacher")
public class TeacherController {

    private final TeacherService teacherService;

    @GetMapping("/page")
    public ResponseEntity<Page<Teacher>> findAllByPage(
            @RequestParam(required = false) String filter,
            Pageable pageable) {
        return ResponseEntity.ok(teacherService.findAllAsPage(filter, pageable));
    }
}
