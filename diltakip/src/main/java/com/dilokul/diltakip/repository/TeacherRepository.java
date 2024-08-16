package com.dilokul.diltakip.repository;

import com.dilokul.diltakip.model.entity.Teacher;
import com.dilokul.diltakip.enums.CityEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {

    // Retrieve all teachers with pagination
    Page<Teacher> findAll(Pageable pageable);

    // Filter teachers by name, surname, or phone with pagination
    Page<Teacher> findByNameContainingIgnoreCaseOrSurnameContainingIgnoreCaseOrPhoneContainingIgnoreCase(
            String name,
            String surname,
            String phone,
            Pageable pageable);

    // Filter teachers by city with pagination
    Page<Teacher> findByCity(CityEnum city, Pageable pageable);

}
