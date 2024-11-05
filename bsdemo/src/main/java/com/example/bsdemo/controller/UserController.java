package com.example.bsdemo.controller;

import com.example.bsdemo.entity.User;
import com.example.bsdemo.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private final UserMapper userMapper;

    @GetMapping("/hello")
    public String hello() {
        return "HELLO";
    }

    @GetMapping("/findAll")
    public List<User> findAllUser() {
        return userMapper.queryAll();
    }
}