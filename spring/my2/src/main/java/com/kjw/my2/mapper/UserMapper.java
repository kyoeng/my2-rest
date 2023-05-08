package com.kjw.my2.mapper;


import com.kjw.my2.domain.UserVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    // ID Check
    int idCheck(String id);

    // JOIN
    int join(UserVO vo);

    // LOGIN
    UserVO login(UserVO vo);

    // GET-INFO
    UserVO getInfo(String id);

    // Change PW
    int changePw(UserVO vo);

}
