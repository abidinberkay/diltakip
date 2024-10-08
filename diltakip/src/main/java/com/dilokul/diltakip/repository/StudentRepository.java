package com.dilokul.diltakip.repository;

import com.dilokul.diltakip.model.entity.Student;
import com.dilokul.diltakip.enums.CityEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    Page<Student> findAll(Pageable pageable);

    Page<Student> findByNameContainingIgnoreCaseOrSurnameContainingIgnoreCaseOrAddressContainingIgnoreCaseOrPhoneContainingIgnoreCase(
            String name,
            String surname,
            String address,
            String phone,
            Pageable pageable);

    Page<Student> findByCity(CityEnum city, Pageable pageable);

}
