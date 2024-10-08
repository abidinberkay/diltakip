package com.dilokul.diltakip.repository;

import com.dilokul.diltakip.model.entity.StudentClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentClassRepository extends JpaRepository<StudentClass, Long> {

    List<StudentClass> findAllByStudentId(Long studentId);

}
