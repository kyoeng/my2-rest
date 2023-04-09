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
    height: 100px;
    margin: 30px auto 0;
    background-color: #87CEFA;
    border-radius: 50px;
    padding: 15px 50px;
    display: flex;
    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 10vw;
        border-radius: 0;
        margin: 0;
    }
    @media screen and (max-width: 850px) {
        height: 20vw;
        flex-wrap: wrap;
        padding: 10px;
    }
`

export const IdxMainCateBox = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 10px;
    &:hover {
        box-shadow: 0 0 10px white;
    }
    @media screen and (max-width: 850px) {
        width: 50%;
        height: 50%;

    }
`

export const IdxMainCateImage = styled.img`
    display: block;
    width: 35px;
    height:35px;
    @media screen and (max-width: 850px) {
        width: 20px;
        height: 20px;
    }
`

export const IdxMainCateText = styled.span`
    width: 100px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 1.4rem;
    color: white;
    @media screen and (max-width: 850px) {
        font-size: 1.2rem;
    }
`