package com.kjw.my2.service;


import com.kjw.my2.domain.UserVO;
import com.kjw.my2.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserMapper userMapper;

    /**
     * 아이디 중복 체크
     * @param vo UserVO
     * @return 중복: 1, 중복x: 0
     */
    @Override
    public int idCheck(String id) {
        return userMapper.idCheck(id);
    }

    /**
     * 회원가입
     * @param vo UserVO
     * @return 성공 1, 실패 0
     */
    @Override
    public int join(UserVO vo) {
        return userMapper.join(vo);
    }

    /**
     * 로그인
     * @param vo UserVO
     * @return UserVO
     */
    @Override
    public UserVO login(UserVO vo) {
        return userMapper.login(vo);
    }
}
