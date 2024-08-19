package com.dilokul.diltakip.model.dto.jwt;

import com.dilokul.diltakip.model.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponse {
    private String jwtToken;
    private UserDto user;
}