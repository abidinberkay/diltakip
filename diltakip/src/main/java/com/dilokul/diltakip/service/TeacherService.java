package com.dilokul.diltakip.service;

import com.dilokul.diltakip.model.entity.Teacher;
import com.dilokul.diltakip.repository.TeacherRepository;
import com.dilokul.diltakip.enums.CityEnum;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TeacherService {

    private final TeacherRepository teacherRepository;

    public Page<Teacher> findAllAsPage(Pageable pageable) {
        return teacherRepository.findAll(pageable);
    }

    public Page<Teacher> findAllAsPage(String filter, Pageable pageable) {
        if (filter == null || filter.isEmpty()) {
            return teacherRepository.findAll(pageable);
        }

        Page<Teacher> result;

        try {
            CityEnum cityEnumFilter = CityEnum.valueOf(filter.toUpperCase());
            result = teacherRepository.findByCity(cityEnumFilter, pageable);
        } catch (IllegalArgumentException e) {
            // CityEnum is not valid, fall back to other fields
            result = teacherRepository.findByNameContainingIgnoreCaseOrSurnameContainingIgnoreCaseOrAddressContainingIgnoreCaseOrPhoneContainingIgnoreCase(
                    filter, filter, filter, filter, pageable);
        }

        return result;
    }
}
