package com.kjw.my2.service;

import com.kjw.my2.domain.UserVO;

public interface UserService {

    // ID Check
    int idCheck(String id);

    // JOIN
    int join(UserVO vo);

}
