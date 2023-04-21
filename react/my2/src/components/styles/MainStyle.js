import styled from 'styled-components';

export const IndexMainContainer = styled.main`
    margin: 90px 0 0;
    @media screen and (max-width: 1024px) {
        margin: 50px 0 0;
    }
`


// index 메인 네비 버튼 부분 =============================
export const IdxMainCateContainer = styled.div`
    width: 1024px;
    height: 200px;
    margin: 40px auto 0;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 150px;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        height: 100px;
    }
`

export const IdxMainCateBox = styled.div`
    width: 200px;
    height: 100%;
    border-radius: 50%;
    background-color: white;
    border: 3px solid #87CEFA;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    position: relative;
    &:hover {
        box-shadow: 0 0 30px #87CEFA;
        opacity: 0.7;
    }
    @media screen and (max-width: 1024px) {
        width: 150px;
    }
    @media screen and (max-width: 800px) {
        width: 100px;
    }
`

export const IdxMainCateImg = styled.img`
    display: block;
    width: 50px;
    height: 50px;
    @media screen and (max-width: 800px) {
        width: 30px;
        height: 30px;
    }
`

export const IdxMainCateText = styled.p`
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 1.7rem;
    color: #87CEFA;
    text-align: center;
    font-weight: bold;
    @media screen and (max-width: 800px) {
        font-size: 1.2rem;
    }
`
