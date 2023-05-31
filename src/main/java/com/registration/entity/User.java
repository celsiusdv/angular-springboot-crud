package com.registration.entity;

import javax.persistence.*;

@Table(name = "users")
@Entity(name = "User")
public class User {
    @Id
    @SequenceGenerator(name= "user_sequence", sequenceName= "user_sequence", allocationSize=2 )//auto-increment by 2 with allocationSize
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    @Column(updatable = false)//disable updates in this column
    private Integer userId;

    @Column
    private String userName;

    @Column
    private String email;

    @Column
    private String password;

    public User(){}
    public User(String userName, String email, String password){
        this.userName=userName;
        this.email=email;
        this.password=password;
    }

    public void setUserName(String userName){
        this.userName=userName;
    }
    public void setEmail(String email){
        this.email=email;
    }
    public void setPassword(String password){
        this.password=password;
    }

    public Integer getUserId(){
        return this.userId;
    }
    public String getUserName(){
        return this.userName;
    }
    public String getEmail(){
        return this.email;
    }
    public String getPassword(){
        return this.password;
    }

    @Override
    public String toString(){
        String description="User{\n"+
                                "Name: "+userName+
                                "|| User ID: "+userId+
                                "|| Email: "+email+
                                "|| Password: "+password+"\n}";
        return description;
    }

}
