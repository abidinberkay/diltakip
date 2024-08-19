package com.dilokul.diltakip.model.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
//@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDto {
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone;

    private LocalDateTime updateTime;

    private LocalDateTime createdOn;
}
