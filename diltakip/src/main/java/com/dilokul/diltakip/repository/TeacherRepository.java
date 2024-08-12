package com.dilokul.diltakip.repository;

import com.dilokul.diltakip.model.entity.Teacher;
import com.dilokul.diltakip.enums.CityEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {

    Page<Teacher> findAll(Pageable pageable);

    Page<Teacher> findByNameContainingIgnoreCaseOrSurnameContainingIgnoreCaseOrAddressContainingIgnoreCaseOrPhoneContainingIgnoreCase(
            String name,
            String surname,
            String address,
            String phone,
            Pageable pageable);

    Page<Teacher> findByCity(CityEnum city, Pageable pageable);

}
