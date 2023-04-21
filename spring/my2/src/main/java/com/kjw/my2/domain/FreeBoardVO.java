package com.kjw.my2.domain;


import lombok.Data;

@Data
public class FreeBoardVO {

    private int freeSeq;
    private String title;
    private String content;
    private String userId;
    private String regDate;

}
