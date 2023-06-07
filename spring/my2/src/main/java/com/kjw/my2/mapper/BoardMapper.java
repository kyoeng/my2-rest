package com.kjw.my2.mapper;


import com.kjw.my2.domain.CommentsVO;
import com.kjw.my2.domain.FreeBoardVO;
import com.kjw.my2.domain.PostBoardVO;
import com.kjw.my2.domain.forPaging.Criteria;
import com.kjw.my2.domain.forPaging.SearchCri;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {

    // 공지사항 데이터 가져오기(여러 개)
    List<PostBoardVO> getPost(Criteria cri);

    // 공지사항 총 데이터 가져오기
    int totalPost();

    // 자유게시판 데이터 가져오기(여러 개)
    List<FreeBoardVO> getFree(SearchCri cri);

    // 자유게시판 총 데이터 가져오기
    int totalFree(SearchCri cri);

    // 자유게시판 디테일 가져오기
    FreeBoardVO getFreeDetail(FreeBoardVO vo);

    // 댓글 가져오기
    List<CommentsVO> getComments(FreeBoardVO vo);





    // 공지사항 등록
    int regiPost(PostBoardVO vo);

    // 자유게시판 등록
    int regiFree(FreeBoardVO vo);

    // 댓글 등록
    int regiCmt(CommentsVO vo);

    // 자유게시판 삭제
    int delFree(FreeBoardVO vo);

}
