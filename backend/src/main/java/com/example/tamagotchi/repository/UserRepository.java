package com.example.tamagotchi.repository;

import com.example.tamagotchi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
    boolean existsByNickname(String nickname);
    User findByEmail(String email);
}