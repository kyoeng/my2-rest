package com.kjw.my2.domain;


import lombok.Data;

@Data
public class CommentsVO {

    private int cmtSeq;
    private int freeSeq;
    private String cmtContent;
    private String userId;
    private String refDate;

}
