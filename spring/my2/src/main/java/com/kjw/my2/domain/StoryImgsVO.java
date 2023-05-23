package com.kjw.my2.domain;


import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class StoryImgsVO {

    private int imgSeq;
    private int storySeq;
    private String userId;
    private String imgPath;
    private String regDate;

    // 파일 받는 용도의 필드
    private MultipartFile file;
}
