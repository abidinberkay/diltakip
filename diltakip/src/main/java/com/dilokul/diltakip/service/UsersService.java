package com.dilokul.diltakip.service;

import com.dilokul.diltakip.model.entity.Users;
import com.dilokul.diltakip.repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UsersService {

    private final UsersRepository usersRepository;

    public Optional<Users> getUserByEmail(String email) {
        return usersRepository.findByEmail(email);
    }



}
