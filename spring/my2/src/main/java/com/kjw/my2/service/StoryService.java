package com.kjw.my2.service;


import com.kjw.my2.domain.StoryImgsVO;
import com.kjw.my2.domain.StorysVO;

public interface StoryService {

    // 스토리 등록
    int regStory(StorysVO vo);

    // 등록 직후 seq 조회
    int selectSeq(StorysVO vo);

}
