package com.example.tamagotchi.service;

import com.example.tamagotchi.entity.User;
import com.example.tamagotchi.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepo;

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public List<User> findAll() {
        return userRepo.findAll();
    }

    public Optional<User> findById(Long id) {
        return userRepo.findById(id);
    }

    public User create(User user) {
        return userRepo.save(user);
    }

    public void delete(Long id) {
        userRepo.deleteById(id);
    }

    public User update(Long id, User updatedUser) {
        return userRepo.findById(id).map(user -> {
            user.setEmail(updatedUser.getEmail());
            user.setPassword(updatedUser.getPassword());
            user.setNickname(updatedUser.getNickname());
            return userRepo.save(user);
        }).orElseThrow(() -> new RuntimeException("User not found"));
    }
    
    // 아이디, 이메일, 닉네임 중복 체크
    public boolean checkDuplicateId(Long id) {
        return userRepo.existsById(id);
    }
    
    public boolean checkDuplicateEmail(String email) {
        return userRepo.existsByEmail(email);
    }
    
    public boolean checkDuplicateNickname(String nickname) {
        return userRepo.existsByNickname(nickname);
    }
}