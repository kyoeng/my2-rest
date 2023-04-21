package com.kjw.my2.controller;


import com.kjw.my2.domain.forPaging.Criteria;
import com.kjw.my2.domain.forPaging.PageMaker;
import com.kjw.my2.domain.forPaging.SearchCri;
import com.kjw.my2.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
public class BoardController {

    // 필드 =====
    private final BoardService boardService;

    // 메서드 (로그인 필요 X) =====

    /**
     * 공지사항을 위한 메서드
     * @param cri Criteria
     * @param pageMaker PageMaker
     * @return 공지사항 데이터
     */
    @GetMapping("/get-post")
    public Map<String, Object> getPost(Criteria cri, PageMaker pageMaker) {
        Map<String, Object> result = new HashMap<>();

        cri.setStartNum();
        result.put("post", boardService.getPost(cri));

        pageMaker.setCriteria(cri);
        pageMaker.setTotalDataCount(boardService.totalPost());
        result.put("pageMaker", pageMaker);

        return result;
    }

    /**
     * 자유게시판을 위한 메서드
     * @param cri SearchCri
     * @param pageMaker PageMaker
     * @return 자유게시판 데이터
     */
    @GetMapping("/get-free")
    public Map<String, Object> getFree(SearchCri cri, PageMaker pageMaker, @RequestParam(value = "currentPage", required = false) String currentPage,
                                       @RequestParam(value = "keyword", required = false) String keyword, @RequestParam(value = "type", required = false) String type) {
        Map<String, Object> result = new HashMap<>();

        if (currentPage != null) cri.setCurrentPage(Integer.parseInt(currentPage));

        if (keyword != null && !"".equals(keyword) && type != null && !"".equals(type)) {
            cri.setKeyword(keyword);
            cri.setType(type);
            result.put("keyword", keyword);
            result.put("type", type);
        }

        cri.setStartNum();
        result.put("free", boardService.getFree(cri));

        pageMaker.setCriteria(cri);
        pageMaker.setTotalDataCount(boardService.totalFree(cri));
        result.put("pageMaker", pageMaker);

        return result;
    }



    // 메서드 (로그인 필요) =====

}
