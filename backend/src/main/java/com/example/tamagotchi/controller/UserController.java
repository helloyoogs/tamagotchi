package com.example.tamagotchi.controller;

import com.example.tamagotchi.entity.User;
import com.example.tamagotchi.service.UserService;

import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.create(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.update(id, user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.delete(id);
    }
    
    // 회원가입: 유효성 + 중복 체크 포함
    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@Valid @RequestBody User user) {
        if (userService.checkDuplicateEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("이미 사용 중인 이메일입니다.");
        }
        if (userService.checkDuplicateNickname(user.getNickname())) {
            return ResponseEntity.badRequest().body("이미 사용 중인 닉네임입니다.");
        }

        userService.create(user);
        return ResponseEntity.ok("회원가입 완료");
    }
    
    // 이메일, 닉네임 중복 체크
    @GetMapping("/check-email")
    public boolean checkDuplicateEmail(@RequestParam String email) {
        return userService.checkDuplicateEmail(email);
    }
    
    @GetMapping("/check-nickname")
    public boolean checkDuplicateNickname(@RequestParam String nickname) {
        return userService.checkDuplicateNickname(nickname);
    }
}