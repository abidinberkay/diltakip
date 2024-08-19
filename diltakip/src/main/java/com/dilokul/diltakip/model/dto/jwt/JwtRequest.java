package com.dilokul.diltakip.model.dto.jwt;

import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtRequest {

    @Email
    private String email;
    private String password;
    private String platform;
}
