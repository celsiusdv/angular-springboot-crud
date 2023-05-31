package com.registration.controller;

import com.registration.entity.User;
import com.registration.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/users/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/create")
    public User createUser(@RequestBody User user){
        return userService.insertUser(user);
    }

    @GetMapping("/read-all")
    public List<User> readAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/read/{userId}")
    public User readUserById(@PathVariable("userId") Integer userId){
        return userService.getUserById(userId);
    }

    @PutMapping("/update/{userId}")
    public User updateUser(@PathVariable("userId") Integer userId, @RequestBody User user){
        return userService.updateUser(userId, user);
    }

    @DeleteMapping("/delete/{userId}")
    public void deleteUser(@PathVariable("userId") Integer userId){
        userService.deleteUserById(userId);
    }

}
