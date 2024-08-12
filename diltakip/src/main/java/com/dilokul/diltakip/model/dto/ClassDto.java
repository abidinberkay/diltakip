package com.dilokul.diltakip.model.dto;


import lombok.Data;

@Data
public class ClassDto {
    private Long id;
    private String name;
    private String language;
    private String teacherId;
    private TeacherDto teacherDto;
}
