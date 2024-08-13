package com.dilokul.diltakip.repository;

import com.dilokul.diltakip.model.entity.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long> {

    // Retrieves all Class entities with pagination
    Page<Class> findAll(Pageable pageable);

    // Searches Class entities by name or language, with pagination
    Page<Class> findByNameContainingIgnoreCaseOrLanguageContainingIgnoreCase(
            String name,
            String language,
            Pageable pageable);
}
