package com.kjw.my2.domain;


import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class StorysVO {

    private int storySeq;
    private String userId;
    private String storyTitle;
    private String storyArea;
    private String storyContent;
    private String regDate;
    private int storyView;
    private int storyLike;

    // 파일 배열 받는 용도의 필드
    private List<MultipartFile> files;

}
