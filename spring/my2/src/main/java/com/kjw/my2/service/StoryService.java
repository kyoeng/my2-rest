package com.kjw.my2.service;


import com.kjw.my2.domain.StoryCommentsVO;
import com.kjw.my2.domain.StoryDTO;
import com.kjw.my2.domain.StoryImgsVO;
import com.kjw.my2.domain.StorysVO;
import com.kjw.my2.domain.forPaging.SearchCri;

import java.util.List;

public interface StoryService {

    // 스토리 가져오기
    List<StoryDTO> getStorys(SearchCri cri);

    // 해당 아이디의 스토리 가져오기
    List<StoryDTO> getMyStorys(SearchCri cri);

    // 스토리 전체 데이터 갯수
    int totalStory(SearchCri cri);

    // 해당 아이디의 스토리 전체 데이터 갯수
    int totalMyStory(SearchCri cri);

    // 스토리 디테일을 위한 스토리 하나 데이터 가져오기
    StorysVO getStoryOne(StorysVO vo);

    // 스토리 디테일을 위한 스토리 이미지 데이터 가져오기
    List<String> getStoryImgs(StorysVO vo);

    // 스토리 댓글 가져오기
    List<StoryCommentsVO> getStoryCmt(StorysVO vo);

    // 조회수 증가
    int addView(StorysVO vo);

    // 스토리 등록
    int regStory(StorysVO vo);

    // 등록 직후 seq 조회
    int selectSeq(StorysVO vo);

    // 댓글 등록
    int regStcmt(StoryCommentsVO vo);

    // Like 등록
    int regLike(StorysVO vo);

    // Like가 있는지 가져오기
    int getLike(StorysVO vo);

    // 스토리 삭제
    int delStory(StorysVO vo);

}
