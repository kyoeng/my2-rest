package com.kjw.my2.domain;


import lombok.Data;

@Data
public class PostBoardVO {

    private int postSeq;
    private String title;
    private String content;
    private  String regDate;

}
