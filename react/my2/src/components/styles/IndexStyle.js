import styled from 'styled-components';

export const IndexMainContainer = styled.main`
    margin: 90px 0 0;
    @media screen and (max-width: 1024px) {
        margin: 50px 0 0;
    }
`


export const RecommendContainer = styled.div`
    width: 1024px;
    margin: 100px auto 0;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

export const RecommendTitle = styled.h3`
    width: 100%;
    height: 50px;
    position: relative;
    @media screen and (max-width: 800px) {
        height: 30px;
    }
`

export const RecommendTitleLine = styled.div`
    width: 100%;
    height: 25px;
    border-bottom: 3px dashed #87CEFA;
    @media screen and (max-width: 800px) {
        height: 15px;
        border-bottom: 2px dashed #87CEFA;
    }
`

export const RecommendTitleText = styled.span`
    width: 300px;
    height: 100%;
    line-height: 50px;
    text-align: center;
    position: absolute;
    top: 0;
    left: calc((100% - 300px) / 2);
    font-size: 2rem;
    color: #87CEFA;
    background-color: white;
    font-weight: bold;
    @media screen and (max-width: 800px) {
        width: 200px;
        left: calc((100% - 200px) / 2);
        line-height: 30px;
        font-size: 1.6rem;
    }
`

// 추천 여행지 지역명 박스
export const RecommendAreaBox = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 10px;
`


// 추천 여행지 컨텐츠 박스
export const ContentContainer = styled.div`
    width: 1024px;
    height: 600px;
    margin: 30px auto 0;
    display: flex;
`

// 추천 여행지 정보 박스
export const ContentBox = styled.div`
    width: 424px;
    height: 100%;
`

// 추천 여행지 지도 박스
export const ContentMap = styled.div`
    width: 600px;
    height: 100%;
`