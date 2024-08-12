package com.dilokul.diltakip.repository;

import com.dilokul.diltakip.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    Page<Student> findAll(Pageable pageable);

    Page<Student> findByNameContainingIgnoreCaseOrSurnameContainingIgnoreCase(String name, String surname, Pageable pageable);

}
