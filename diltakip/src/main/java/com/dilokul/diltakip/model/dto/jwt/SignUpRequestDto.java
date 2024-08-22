package com.dilokul.diltakip.model.dto.jwt;

import lombok.Data;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import java.util.Set;


@Data
public class SignUpRequestDto {

    @Email
    @NotEmpty
    private String email;
    private String password;
    private String companyId;
    private String firstName;
    private String lastName;
    private String phone;
    private Set<String> role;
}
