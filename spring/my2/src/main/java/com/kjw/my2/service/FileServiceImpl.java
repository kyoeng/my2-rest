package com.kjw.my2.service;


import com.kjw.my2.domain.UserVO;
import com.kjw.my2.mapper.FileMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;


@Slf4j
@Service
@RequiredArgsConstructor
public class FileServiceImpl implements FileService {

    // 필드 =====
    private final FileMapper fileMapper;


    // 메서드 =====

    /**
     * 유저 이미지 변경
     * @param vo UserVO
     * @return 성공 시 1, 실패 시 0
     */
    @Override
    public int userImageChange(UserVO vo) {
        return fileMapper.userImageChange(vo);
    }


    /**
     * 파일 저장
     * @param file MultipartFile
     * @param request HttpServletRequest
     * @param inputDir 저장 디렉토리명
     * @param num 파일 숫자
     * @param userId 유저 아이디
     * @return 저장된 파일 이름(경로가 아닌 파일명)
     */
    @Override
    public String fileIO(MultipartFile file, HttpServletRequest request, String inputDir, int num, String userId) {
        if (file.isEmpty()) return null;

        /**
         *  로컬 개발 환경인 경우 path = C:\Users\82109\AppData\Local\Temp\tomcat-docbase.8080.6386287946527710368\
         */
        String realPath = request.getServletContext().getRealPath("/");
        if (realPath.contains("Temp")) {
            realPath = "C:\\DevJ\\workspace\\my2-rest\\react\\my2\\public\\images\\" + inputDir + "\\";
        } else {
            realPath = "";
        }

        // 해당 디렉토리가 없을 시 생성
        File dir = new File(realPath);
        if (!dir.exists()) { if (!dir.mkdir()) return null; }

        // 파일 이름 추출
        String originName = file.getOriginalFilename();

        // 바꿔서 저장할 파일 이름 생성
        String imgId;
        if (num > 0) {
            // 스토리 등록인 경우
            imgId = UUID.randomUUID().toString().substring(0, 8) + "-" + num;
        } else {
            // 유저 이미지 변경인 경우
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Date date = new Date();
            imgId = dateFormat.format(date) + "-" + userId;
        }

        // 파일 확장자 추출
        String extension = originName.substring(originName.lastIndexOf("."));

        // 실제 저장할 파일 이름 만들기
        String saveFileName = imgId + extension;

        // 최종 파일 경로 생성
        String finalPath = realPath + saveFileName;

        try {
            // 이미지 저장
            file.transferTo(new File(finalPath));
            return saveFileName;
        } catch (IOException e) {
            log.info("File Exception : {}", e.toString());
            return null;
        }
    }
}
