package com.kjw.my2.domain;


import lombok.Data;

@Data
public class UserVO {

    private int seq;
    private String id;
    private String password;
    private String name;
    private String phone;
    private String email;
    private String state;
    private String roll;
    private String image;

}
