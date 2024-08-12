package com.dilokul.diltakip.service;

import com.dilokul.diltakip.model.Student;
import com.dilokul.diltakip.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;

    public Page<Student> findAllAsPage(Pageable pageable) {
        return studentRepository.findAll(pageable);
    }

    public Page<Student> findAllAsPage(String filter, Pageable pageable) {
        if (filter == null || filter.isEmpty()) {
            return studentRepository.findAll(pageable);
        }
        return studentRepository.findByNameContainingIgnoreCaseOrSurnameContainingIgnoreCase(filter, filter, pageable);
    }
}
