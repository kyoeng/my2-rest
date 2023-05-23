package com.kjw.my2.mapper;


import com.kjw.my2.domain.StoryImgsVO;
import com.kjw.my2.domain.StorysVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface StoryMapper {

    // 스토리 등록
    int regStory(StorysVO vo);

    // 등록 직후 seq 조회
    int selectSeq(StorysVO vo);

}
