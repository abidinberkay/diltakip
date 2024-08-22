package com.dilokul.diltakip.repository;

import com.dilokul.diltakip.model.entity.ClassTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClassTimeRepository extends JpaRepository<ClassTime, Long> {

    Optional<ClassTime> findByClassIdAndCompanyId(Long classId, Long companyId);

}
