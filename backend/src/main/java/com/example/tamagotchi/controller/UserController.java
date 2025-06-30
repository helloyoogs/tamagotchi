package com.example.tamagotchi.controller;

import com.example.tamagotchi.constant.UserResponseCode;
import com.example.tamagotchi.entity.User;
import com.example.tamagotchi.service.UserService;

import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity<Map<String, Object>> signUp(@Valid @RequestBody User user) {
        if (userService.checkDuplicateEmail(user.getEmail())) {
            return ResponseEntity.ok(Map.of("code", UserResponseCode.EMAIL_ALREADY_EXISTS));
        }
        if (userService.checkDuplicateNickname(user.getNickname())) {
            return ResponseEntity.ok(Map.of("code", UserResponseCode.NICKNAME_ALREADY_EXISTS));
        }

        userService.create(user);
        return ResponseEntity.ok(Map.of("code", UserResponseCode.SIGNUP_SUCCESS));
    }


    // 이메일 중복 체크
    @GetMapping("/check-email")
    public ResponseEntity<Map<String, Boolean>> checkDuplicateEmail(@RequestParam String email) {
        boolean isDuplicated = userService.checkDuplicateEmail(email);
        return ResponseEntity.ok(Map.of("isDuplicated", isDuplicated));
    }

    // 닉네임 중복 체크
    @GetMapping("/check-nickname")
    public ResponseEntity<Map<String, Boolean>> checkDuplicateNickname(@RequestParam String nickname) {
        boolean isDuplicated = userService.checkDuplicateNickname(nickname);
        return ResponseEntity.ok(Map.of("isDuplicated", isDuplicated));
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody User user) {
        Map<String, Object> result = userService.authenticate(user.getEmail(), user.getPassword());
        return ResponseEntity.ok(result);
    }
}
