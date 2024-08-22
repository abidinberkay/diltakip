package com.dilokul.diltakip.repository;

import com.dilokul.diltakip.model.entity.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long> {

    // Retrieves all Class entities with pagination
    Page<Class> findAll(Pageable pageable);

    Page<Class> findAllByCompanyId(Pageable pageable, Long companyId);


    // Searches Class entities by name or language, with pagination
    Page<Class> findByNameContainingIgnoreCaseOrLanguageContainingIgnoreCase(
            String name,
            String language,
            Pageable pageable);

    Page<Class> findByCompanyIdAndNameContainingIgnoreCaseOrCompanyIdAndLanguageContainingIgnoreCase(
            Long companyId,
            String name,
            Long companyIdAgain,
            String language,
            Pageable pageable);



    List<Class> findAllByTeacherId(Long id);
}
