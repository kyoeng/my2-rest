package com.kjw.my2.service;


import com.kjw.my2.domain.StoryImgsVO;
import com.kjw.my2.domain.StorysVO;
import com.kjw.my2.mapper.StoryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StoryServiceImpl implements StoryService {

    private final StoryMapper storyMapper;

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
