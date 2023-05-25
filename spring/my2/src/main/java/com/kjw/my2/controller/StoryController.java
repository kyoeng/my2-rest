package com.kjw.my2.controller;


import com.kjw.my2.domain.StoryDTO;
import com.kjw.my2.domain.StoryImgsVO;
import com.kjw.my2.domain.StorysVO;
import com.kjw.my2.domain.forPaging.PageMaker;
import com.kjw.my2.domain.forPaging.SearchCri;
import com.kjw.my2.service.FileService;
import com.kjw.my2.service.StoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Slf4j
@RestController
@RequiredArgsConstructor
public class StoryController {

    // 필드 =====
    private final StoryService storyService;
    private final FileService fileService;


    // 메서드 (로그인 필요 X) =====
    @GetMapping("/get-storys")
    public Map<String, Object> getStorys(SearchCri cri, PageMaker pageMaker, @RequestParam(value = "currentPage", required = false) String currentPage,
                                         @RequestParam(value = "type", required = false) String type, @RequestParam(value = "keyword", required = false) String keyword) {
        // return할 Map 선언
        Map<String, Object> result = new HashMap<>();

        if (currentPage != null) cri.setCurrentPage(Integer.parseInt(currentPage));     // currentPage가 null이 아니면 동작
        if (type != null) cri.setType(type);                                            // type이 null이 아니면 동작
        if (keyword != null) cri.setKeyword(keyword);                                   // keyword가 null이 아니면 동작

        cri.setRowsPerPage(9);  // 9개의 데이터를 내보내기 위한 setter
        cri.setStartNum();      // currentPage에 맞게 limit 시작점 setting
        result.put("result", storyService.getStorys(cri));      // 데이터 검색

        pageMaker.setCriteria(cri);
        pageMaker.setTotalDataCount(storyService.totalStory(cri));
        result.put("pageMaker", pageMaker);

        return result;
    }


    // 메서드 (로그인 필요) =====

    /**
     * 스토리 등록을 위한 컨트롤러
     * @param vo StorysVO
     * @param imgsVO StoryImgsVO
     * @param request HttpServletRequest
     * @return 등록 성공 시 true, 실패 시 false
     */
    @Transactional
    @PostMapping("/auth/reg-story")
    public boolean regStory(@ModelAttribute StorysVO vo, StoryImgsVO imgsVO, HttpServletRequest request) {
        if (vo.getFiles() == null) return false;    // 이미지가 없으면 바로 false 리턴 후 컨트롤러 종료

        if (storyService.regStory(vo) > 0) {
            // 스토리 테이블에 등록 성공 시
            imgsVO.setStorySeq(storyService.selectSeq(vo));     // 참조하는 스토리 테이블의 seq 채우기
            imgsVO.setUserId(vo.getUserId());                   // 해당 스토리의 유저ID 채우기
            int fileNum = 0;                                    // 파일 이름에 필요한 번호 변수로 선언

            for (MultipartFile f : vo.getFiles()) {
                fileNum++;      // 파일 번호가 1번부터 시작되도록

                // 파일 등록 후 return값으로 나오는 저장된 파일명을 변수로 선언
                String inputFileName = fileService.fileIO(f, request, "storyImages", fileNum, null);

                // Transaction을 위해 try~catch로 묶음
                try {
                    if (inputFileName != null) {
                        // 이미지 저장이 성공인 경우
                        imgsVO.setImgPath("./images/storyImages/" + inputFileName);     // 해당 이미지의 경로 채우기

                        // 이미지 테이블에 등록 후 실패한 경우 Exception 발생으로 rollback
                        if (fileService.regStoryImg(imgsVO) < 1) throw new Exception("이미지 테이블에 등록 실패");
                    } else {
                        // 이미지 저장이 실패인 경우 (Exception 발생으로 rollback 시킴)
                        throw new Exception("이미지 저장 실패");
                    }
                } catch (Exception e) {
                    log.warn(e.toString());
                    return false;
                }
            }

            return true;    // 정상처리라면 true return
        } else {
            // 스토리 테이블에 등록 실패 시
            return false;
        }
    }

}
