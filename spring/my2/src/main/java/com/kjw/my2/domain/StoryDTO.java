package com.kjw.my2.domain;


import lombok.Data;

@Data
public class StoryDTO {

    private int storySeq;
    private String userId;
    private String storyTitle;
    private String storyArea;
    private String imgPath;
    private int storyView;
    private int storyLike;

}
