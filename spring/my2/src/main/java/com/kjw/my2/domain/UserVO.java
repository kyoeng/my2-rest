package com.kjw.my2.domain;


import lombok.Data;

@Data
public class UserVO {

    private int userSeq;
    private String userId;
    private String password;
    private String userName;
    private String userPhone;
    private String userEmail;
    private String userState;
    private String userRole;
    private String userImage;

}
