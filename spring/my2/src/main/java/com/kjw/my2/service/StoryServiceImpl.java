package com.kjw.my2.service;


import com.kjw.my2.domain.StoryDTO;
import com.kjw.my2.domain.StoryImgsVO;
import com.kjw.my2.domain.StorysVO;
import com.kjw.my2.domain.forPaging.SearchCri;
import com.kjw.my2.mapper.StoryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StoryServiceImpl implements StoryService {

    private final StoryMapper storyMapper;


    /**
     * 스토리 가져오기
     * @param cri SearchCri
     * @return List<StoryDTO>
     */
    @Override
    public List<StoryDTO> getStorys(SearchCri cri) {
        return storyMapper.getStorys(cri);
    }


    /**
     * 해당 아이디의 스토리 가져오기 ( 마이페이지 )
     * @param cri SearchCri
     * @return List<StoryDTO>
     */
    @Override
    public List<StoryDTO> getMyStorys(SearchCri cri) {
        return storyMapper.getMyStorys(cri);
    }


    /**
     * 스토리 데이터 전체 갯수
     * @param cri SearchCri
     * @return int
     */
    @Override
    public int totalStory(SearchCri cri) {
        return storyMapper.totalStory(cri);
    }


    /**
     * 해당 아이디의 스토리 데이터 전체 갯수
     * @param cri SearchCri
     * @return int
     */
    @Override
    public int totalMyStory(SearchCri cri) {
        return storyMapper.totalMyStory(cri);
    }


    /**
     * 스토리 테이블에 등록
     * @param vo StorysVO
     * @return 성공 시 1, 실패 시 0
     */
    @Override
    public int regStory(StorysVO vo) {
        return storyMapper.regStory(vo);
    }


    /**
     * 스토리에 등록한 직후 해당 스토리의 seq를 조회
     * @param vo StorysVO
     * @return 해당하는 데이터의 seq
     */
    @Override
    public int selectSeq(StorysVO vo) {
        return storyMapper.selectSeq(vo);
    }
}
