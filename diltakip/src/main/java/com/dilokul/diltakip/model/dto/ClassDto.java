package com.dilokul.diltakip.model.dto;


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
    private boolean isFull;
}
