package com.dilokul.diltakip.model.dto;


import jakarta.persistence.Column;
import lombok.Data;

@Data
public class ClassDto {
    private Long id;
    private String name;
    private String language;
    private Long teacherId;
    private TeacherDto teacherDto;
    private Long capacity;
    private Long numberOfStudent;
}
