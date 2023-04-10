import styled from "styled-components"


export const RecommendContainer = styled.div`
    width: 1024px;
    margin: 100px auto 0;
    @media screen and (max-width: 1024px) {
        width: 100%;
        margin: 50px 0 0;
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


// 추천 여행지 컨텐츠 컨테이너너
export const ContentContainer = styled.div`
    width: 1024px;
    height: 600px;
    margin: 30px auto 0;
    display: flex;
    position: relative;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

// 추천 여행지 정보 박스
export const ContentBox = styled.div`
    width: 424px;
    height: 100%;
    overflow: auto;
    border: 2px solid #87CEFA;
    @media screen and (max-width: 1024px) {
        width: 40%;
    }
    @media screen and (max-width: 800px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
`

// 추천 여행지 컨텐츠
export const Contents = styled.div`
    width: 100%;
    height: 180px;
    border-bottom:2px solid #87CEFA;
    padding: 30px;
    color: #00BFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
`

// 추천 여행지명
export const ContentsTitle = styled.p`
    width: 100%;
    height: 50px;
    font-size: 2rem;
    font-weight: bold;
    line-height: 50px;
`

// 추천 여행지 주소
export const ContensAddr = styled.p`
    width: 70%;
    height: 30px;
    line-height: 30px;
    font-size: 1.2rem;
`

// 추천 여행지 지도에서 보기 버튼
export const ContentsViewBtn = styled.button`
    width: 80px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    position: absolute;
    bottom: 45px;
    right: 30px;
    box-shadow: 0 0 5px #00BFFF;
    color: #00BFFF;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

// 추천 여행지 공유 버튼
export const ContentsShareBtn = styled.button`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 45px;
    right: 30px;
    background: url(./images/icons/share_blue.png) center/80% no-repeat;
    box-shadow: 0 0 5px #00BFFF;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

// 추천 여행지 지도 박스
export const ContentMap = styled.div`
    width: 600px;
    height: 100%;
    visibility: visible;
    @media screen and (max-width: 1024px) {
        width: 60%;
    }
    @media screen and (max-width: 800px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        visibility: hidden;
    }
`

// 지도 리스트 전환 버튼
export const BoxMapChangeBtn = styled.button`
    width: 100px;
    height: 30px;
    display: none;
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: #87CEFA;
    color: white;
    z-index: 100;
    &:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 800px) {
        display: block;
    }
`