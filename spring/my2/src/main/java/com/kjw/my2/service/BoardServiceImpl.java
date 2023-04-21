package com.kjw.my2.service;


import com.kjw.my2.domain.FreeBoardVO;
import com.kjw.my2.domain.PostBoardVO;
import com.kjw.my2.domain.forPaging.Criteria;
import com.kjw.my2.domain.forPaging.SearchCri;
import com.kjw.my2.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    // 필드 =====
    private final BoardMapper boardMapper;

    // 메서드 =====

    /**
     * 곻지사항 데이터 가져오기
     * @return 공지사항 데이터
     */
    @Override
    public List<PostBoardVO> getPost(Criteria cri) {
        return boardMapper.getPost(cri);
    }

    /**
     * 공지사항의 총 데이터 갯수 가져오기
     * @return 공지사항 총 데이터 갯수
     */
    @Override
    public int totalPost() {
        return boardMapper.totalPost();
    }




    /**
     * 자유게시판 데이터 가져오기
     * @param cri SearchCri
     * @return 자유게시판 데이터
     */
    @Override
    public List<FreeBoardVO> getFree(SearchCri cri) {
        return boardMapper.getFree(cri);
    }

    /**
     * 자유게시판 총 데이터 갯수 가져오기
     * @return 자유게시판 총 데이터 갯수
     */
    @Override
    public int totalFree(SearchCri cri) {
        return boardMapper.totalFree(cri);
    }
}
