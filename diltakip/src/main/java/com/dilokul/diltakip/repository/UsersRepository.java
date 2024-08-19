package com.dilokul.diltakip.repository;

import com.dilokul.diltakip.model.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, String> {

    Optional<Users> findByFirstName(String firstname);

    Optional<Users> findByEmailAndPassword(String email, String password);

    Optional<Users> findByEmail(String email);

    Optional<Users> findById(String id);

}
