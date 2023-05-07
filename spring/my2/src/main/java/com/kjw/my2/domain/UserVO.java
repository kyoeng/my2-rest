package com.kjw.my2.domain;


import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

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

    // 유저의 이미지 변경 시 이미지를 받기 위한 필드
    private MultipartFile file;

}
