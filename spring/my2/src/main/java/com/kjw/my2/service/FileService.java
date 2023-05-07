package com.kjw.my2.service;


import com.kjw.my2.domain.UserVO;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

public interface FileService {

    // 유저 이미지 변경
    int userImageChange(UserVO vo);

    // 파일 저장
    String fileIO(MultipartFile file, HttpServletRequest request, String inputDir, int num, String userId);

}
