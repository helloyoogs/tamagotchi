package com.example.tamagotchi.controller;

import com.example.tamagotchi.entity.User;
import com.example.tamagotchi.service.UserService;
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
    
    // 아이디, 이메일, 닉네임 중복 체크
    @GetMapping("/check-id")
    public boolean checkDuplicateId(@RequestParam Long id) {
        return userService.checkDuplicateId(id);
    }
    
    @GetMapping("/check-email")
    public boolean checkDuplicateEmail(@RequestParam String email) {
        return userService.checkDuplicateEmail(email);
    }
    
    @GetMapping("/check-nickname")
    public boolean checkDuplicateNickname(@RequestParam String nickname) {
        return userService.checkDuplicateNickname(nickname);
    }
}