package com.dilokul.diltakip.controller;

import com.dilokul.diltakip.model.dto.TeacherDto;
import com.dilokul.diltakip.model.entity.Teacher;
import com.dilokul.diltakip.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/{id}")
    public ResponseEntity<TeacherDto> findById(@PathVariable Long id) throws Exception {
        TeacherDto teacherDto = teacherService.findTeacherById(id);
        return ResponseEntity.ok(teacherDto);
    }

    @GetMapping("/list")
    public ResponseEntity<List<TeacherDto>> findAll() {
        return ResponseEntity.ok(teacherService.findAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<TeacherDto> updateTeacher(
            @PathVariable Long id,
            @RequestBody TeacherDto teacherDto) throws Exception {
        TeacherDto updatedTeacher = teacherService.updateTeacher(id, teacherDto);
        return ResponseEntity.ok(updatedTeacher);
    }
}
