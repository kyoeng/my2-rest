package com.kjw.my2.domain;


import lombok.Data;

@Data
public class StoryCommentsVO {

    private int stcmtSeq;
    private int storySeq;
    private String stcmtContent;
    private String userId;
    private String regDate;

}
