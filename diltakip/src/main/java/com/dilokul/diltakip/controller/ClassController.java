package com.dilokul.diltakip.controller;

import com.dilokul.diltakip.model.dto.ClassDto;
import com.dilokul.diltakip.service.ClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/class")
public class ClassController {

    private final ClassService classService;

    @PostMapping
    public ResponseEntity<ClassDto> addClass(@RequestBody ClassDto classDto) {
        ClassDto createdClass = classService.addClass(classDto);
        return ResponseEntity.ok(createdClass);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClassDto> updateClass(@PathVariable Long id, @RequestBody ClassDto classDto) {
        try {
            ClassDto updatedClass = classService.updateClass(id, classDto);
            return ResponseEntity.ok(updatedClass);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClass(@PathVariable Long id) {
        try {
            classService.deleteClass(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClassDto> findClassById(@PathVariable Long id) {
        try {
            ClassDto classDto = classService.findClassById(id);
            return ResponseEntity.ok(classDto);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/page")
//    @PreAuthorize("@authorization_util.authorizeForUser(#id, principal)")
    public ResponseEntity<Page<ClassDto>> findAllClassesByPage(
            @RequestParam int page,
            @RequestParam int size,
            @RequestParam(required = false) String filter,
            Principal principal
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);
            Page<ClassDto> classPage = classService.findAllAsPage(filter, pageable, principal.getName());
            return ResponseEntity.ok(classPage);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
