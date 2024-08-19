package com.dilokul.diltakip.model.dto.jwt;

import lombok.Data;
import org.hibernate.usertype.UserType;

@Data
public class LoginUserDto {
    private String id;
    private String firstName;
    private String lastName;
    private LoginMediaDto media;
    private UserType userType;
}
