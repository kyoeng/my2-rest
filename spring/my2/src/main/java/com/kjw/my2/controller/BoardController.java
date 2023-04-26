package com.kjw.my2.controller;


import com.kjw.my2.domain.CommentsVO;
import com.kjw.my2.domain.FreeBoardVO;
import com.kjw.my2.domain.PostBoardVO;
import com.kjw.my2.domain.forPaging.Criteria;
import com.kjw.my2.domain.forPaging.PageMaker;
import com.kjw.my2.domain.forPaging.SearchCri;
import com.kjw.my2.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
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


    /**
     * 자유게시판 디테일 페이지를 위한 메서드
     * @param vo FreeBoardVO
     * @return 해당 자유게시판 정보와 댓글 정보
     */
    @GetMapping("/free-detail")
    public Map<String, Object> getDetail(FreeBoardVO vo, @RequestParam(value = "seq") int seq) {
        Map<String, Object> result = new HashMap<>();

        vo.setFreeSeq(seq);
        vo = boardService.getFreeDetail(vo);

        if (vo != null) {
            result.put("detail", vo);
            result.put("comments", boardService.getComments(vo));
        } else {
            return null;
        }

        return result;
    }



    // 메서드 (로그인 필요) =====

    /**
     * 공지사항 등록을 위한 메서드
     * @param vo PostBoardVO
     * @return Boolean
     */
    @PostMapping("/auth/regi-post")
    public Boolean regiPost(@RequestBody PostBoardVO vo) {
        return boardService.regiPost(vo) > 0;
    }

    /**
     * 자유게시판 등록을 위한 메서드
     * @param vo FreeBoardVO
     * @return Boolean
     */
    @PostMapping("/auth/regi-free")
    public Boolean regiFree(@RequestBody FreeBoardVO vo) {
        return boardService.regiFree(vo) > 0;
    }

    /**
     * 댓글 등록
     * @param vo CommentsVO
     * @return Boolean
     */
    @PostMapping("/auth/regi-cmt")
    public Boolean regiCmt(@RequestBody CommentsVO vo) {
        return boardService.regiCmt(vo) > 0;
    }

}
