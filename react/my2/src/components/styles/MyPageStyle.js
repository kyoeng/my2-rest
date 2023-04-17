import styled from "styled-components";


// 마이페이지 전체 컨테이너
export const MyPageContainer = styled.div`
    width: 1024px;
    margin: 130px auto 0;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

// 마이페이지 타이틀
export const MyPageTitle = styled.h2`
    width: 100%;
    height: 60px;
    font-size: 3rem;
    font-weight: bold;
    color: #00BFFF;
    text-align: center;
    line-height: 60px;
    @media screen and (max-width: 1024px) {
        height: 50px;
        line-height: 50px;
        font-size: 2.5rem;
    }
`

// 마이페이지 이미지
export const MyPageImage = styled.div`
    width: 200px;
    height: 200px;
    margin: 30px auto 0;
    border-radius: 50%;
    border: 3px solid #87CEFA;
    @media screen and (max-width: 1024px) {
        width: 100px;
        height: 100px;
        border: 1px solid #87CEFA;
    }
`

// 내 이미지 바꾸기 박스
export const MyImageChangeBox = styled.div`
    width: 200px;
    height: 50px;
    margin: 10px auto 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

// 내 이미지 사진 선택 input 태그
export const MyImageSeletor = styled.label`
    width: 80px;
    height: 40px;
    font-size: 1.4rem;
    text-align: center;
    line-height: 40px;
    color: #00BFFF;
    border: 1px solid #87CEFA;
    &:hover {
        cursor: pointer;
    }
`

// 내 이미지 선택한 사진으로 바꾸기 버튼
export const MyImageChanger = styled.button`
    width: 80px;
    height: 40px;
    font-size: 1.4rem;
    text-align: center;
    line-height: 40px;
    background-color: #87CEFA;
    color: white;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`




// 마이페이지 네비 박스
export const MyPageNav = styled.div`
    width: 850px;
    height: 130px;
    margin: 30px auto;
    display: flex;
    justify-content: space-evenly;
    padding: 25px 0;
    @media screen and (max-width: 1024px) {
        width: 80%;
        height: 15vw;
    }
    @media screen and (max-width: 800px) {
        width: 80%;
        height: 60px;
        padding: 0;
    }
`

// 마이페이지 네비 버튼
export const MyPageNavBtn = styled.button`
    width: 30%;
    height: 100%;
    border-radius: 40px;
    background-color: #87CEFA;
    color: white;
    font-size: 2rem;
    &:hover {
        cursor: pointer;
        border: 2px solid #87CEFA;
        background-color: white;
        color: #87CEFA;
    }
    @media screen and (max-width: 800px) {
        font-size: 1.6rem;
    }
`


// 나의 스토리 ================
export const MyStoryContainer = styled.div`
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin: 0 auto;
    @media screen and (max-width: 1024px) {
        width: 100%;
        flex-direction: column;
    }
`

export const MyStoryBox = styled.div`
    width: 300px;
    height: 300px;
    border: 3px solid #87CEFA;
    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 29.5vw;
    }
`



// 내 정보 ================
export const MyInfoContainer = styled.div`
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const MyInfoBox = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
`

export const MyInfoInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 10px;
`

export const MyInfoValue = styled.span`
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 1.4rem;
    background-color: white;
    height: 20px;
    line-height: 20px;
    padding: 0 10px;
`

export const MyInfoChangeBtn = styled.button`
    width: 100%;
    height: 50px;
    background-color: #87CEFA;
    color: white;
    font-size: 1.8rem;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        background-color: white;
        border: 3px solid #87CEFA;
        color: #87CEFA;
    }
`



// 임시 ================