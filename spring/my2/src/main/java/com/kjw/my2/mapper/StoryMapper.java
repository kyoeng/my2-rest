package com.kjw.my2.mapper;


import com.kjw.my2.domain.StoryDTO;
import com.kjw.my2.domain.StoryImgsVO;
import com.kjw.my2.domain.StorysVO;
import com.kjw.my2.domain.forPaging.SearchCri;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StoryMapper {

    // 스토리 가져오기
    List<StoryDTO> getStorys(SearchCri cri);

    // 스토리 전체 데이터 갯수
    int totalStory(SearchCri cri);

    // 스토리 등록
    int regStory(StorysVO vo);

    // 등록 직후 seq 조회
    int selectSeq(StorysVO vo);

}
