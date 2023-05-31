package com.registration.service;

import com.registration.entity.User;
import com.registration.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
     @Autowired
     private UserRepository userRepository;

     public User insertUser(User user){
          if(user != null){
               System.out.println("\n------------\nUser created: "+user);
               return userRepository.save(user);
          }else throw new IllegalStateException("wrong user input");
     }

     public List<User> getAllUsers(){
          return userRepository.findAll();
     }

     public User getUserById(Integer userId){
          System.out.println("finding user...");
          Optional<User> user= userRepository.findById(userId);
          if(!user.isEmpty()){
               return user.get();
          }else throw new IllegalStateException("user not found");
     }

     public User updateUser(Integer userId, User user){
          Optional<User> userToUpdate= Optional.of(
                         userRepository.getReferenceById(userId));//user from database to be replaced with new values
          System.out.println("modified user from body request: "+user+
                  "\nuser to be replaced with new values: "+userToUpdate.get());

          if(userToUpdate.isPresent()== true){

               userToUpdate.get().setUserName(user.getUserName());
               userToUpdate.get().setEmail(user.getEmail());
               userToUpdate.get().setPassword(user.getPassword());
               System.out.println("old user values updated to: "+userToUpdate.get());

               return userRepository.save(userToUpdate.get());

          }else throw new IllegalStateException("user can't be updated");
     }

     public void deleteUserById(Integer userId){
          if(userId > 0){
               userRepository.deleteById(userId);
               System.out.println("user with id: "+userId+" deleted");
          }
     }

}
