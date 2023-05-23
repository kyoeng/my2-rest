package com.kjw.my2.mapper;


import com.kjw.my2.domain.StoryImgsVO;
import com.kjw.my2.domain.UserVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FileMapper {

    // 유저 이미지 변경
    int userImageChange(UserVO vo);

    // 스토리 이미지 등록
    int regStoryImg(StoryImgsVO vo);

}
