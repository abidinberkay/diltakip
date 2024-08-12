package com.dilokul.diltakip.model.dto;

import com.dilokul.diltakip.enums.CityEnum;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class StudentDto {
    private Long id;
    private String name;
    private String tckn;
    private String surname;
    private String phone;
    private String secondPhone;
    private String address;
    private CityEnum city;
    private LocalDateTime registrationDate;
    private LocalDateTime updateTime;
    private LocalDateTime createdOn;
    private List<ClassDto> classDtoList;
}
