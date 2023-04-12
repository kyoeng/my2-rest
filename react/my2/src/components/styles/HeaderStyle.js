import styled from "styled-components";
import { Link } from 'react-router-dom';


// 고정 헤더 부분 =============================================
// Header 태그
export const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #87CEFA;
    box-shadow: 0 1px 1px white;
    @media screen and (max-width: 1024px) {
        height: 50px;
        box-shadow: 0 1px 1px #87CEFA;
        background-color: white;
    }
`

// Header 바로 아래 div 태그
export const HeaderInnerBox = styled.div`
    width: 1024px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

// Logo 역할인 h1 태그
export const ProjectTitle = styled.h1`
    width: 100px;
    height: 100%;
    text-indent: -9999em;
    order: 1;
    background: url(./images/icons/my2-logo_white.png) center/90% no-repeat;
    position: absolute;
    top: 0;
    left: calc((100% - 100px) / 2);
    @media screen and (max-width: 1024px) {
        background: url(./images/icons/my2-logo_blue.png) center/70% no-repeat;
    }
`

// Link 태그 position
export const PositionLink = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
`

// Link 태그 none position
export const NonePosiLink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
`

// Header의 Menu 버튼
export const NavBtn = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background: url(./images/icons/NavBtn_white.png) center/cover;
    order: 0;
    &:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 1024px) {
        width: 30px;
        height: 30px;
        background: url(./images/icons/NavBtn_blue.png) center/cover;
    }
`

// Header Login, Search 버튼 ul
export const SearchLoginBox = styled.ul`
    width: 90px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    order: 2;
    @media screen and (max-width: 1024px) {
        width: 70px;
        height: 30px;
    }
`

// Header Search 버튼 li
export const SearchBtn = styled.li`
    width: 40px;
    height: 100%;
    background: url(./images/icons/search_btn_white.png) center/80% no-repeat;
    &:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 1024px) {
        width: 30px;
        background: url(./images/icons/search_btn_blue.png) center/80% no-repeat;
    }
`

// Header Login 버튼 li
export const LoginBtn = styled.li`
    width: 40px;
    height: 100%;
    background: url(./images/icons/login_btn_white.png) center/80% no-repeat;
    @media screen and (max-width: 1024px) {
        width: 30px;
        background: url(./images/icons/login_btn_blue.png) center/80% no-repeat;
    }
`







// 메뉴창 부분 =============================================
// 메뉴창 컨테이너
export const MenuContainer = styled.div`
    width: 200px;
    height: 250px;
    position: absolute;
    top: 61px;
    left: calc(((100% - 1024px) / 2));
    visibility: hidden;
    transition: all 0.5s;
    border: 5px solid #87CEFA;
    background-color: white;
    padding: 10px;
    display: flex;
    z-index: 0;
    opacity: 0;
    /* border-radius: 20px; */
    @media screen and (max-width: 1024px) {
        width: 60%;
        height: calc(100vh - 50px);
        top: 50px;
        left: 0;
    }
`

// 메뉴 팝업 박스
export const MenuBox = styled.div`
    width: 100%;
    height: 100%;
    color: #00BFFF;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
        gap: 20px;
        justify-content: flex-start;
    }
`

// 카테고리에 대한 태그
export const Cate = styled.span`
    width: 100%;
    height: 40px;
    font-size: 1.5rem;
    display: flex;
    line-height: 40px;
    gap: 5px;
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 10px #87CEFA;
    }
    @media screen and (max-width: 1024px) {
        width: 80%;
    }
`

// 카테고리 안의 이미지
export const CateImageTr = styled.div`
    display: block;
    width: 40px;
    height: 100%;
    background: url(./images/icons/map_blue.png) center/70% no-repeat;
`

export const CateImageAdd = styled.div`
    display: block;
    width: 40px;
    height: 100%;
    background: url(./images/icons/add_blue.png) center/70% no-repeat;
`

export const CateImageCus = styled.div`
    display: block;
    width: 40px;
    height: 100%;
    background: url(./images/icons/customer_blue.png) center/70% no-repeat;
`

export const CateImageList = styled.div`
    display: block;
    width: 40px;
    height: 100%;
    background: url(./images/icons/list_blue.png) center/70% no-repeat;
`




// 검색창 ==========================
export const SearchContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: #87CEFA;
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    @media screen and (max-width: 1024px) {
        height: 50px;
        box-shadow: 0 1px 1px #87CEFA;
        background-color: white;
    }
`

export const SearchArea = styled.div`
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1024px) {
        justify-content: center;
        width: 100%;
        position: relative;
    }
`

// logo 관련
export const SearchAreaLogoBox = styled.h1`
    width: 100px;
    height: 100%;
    text-indent: -9999em;
    background: url(./images/icons/my2-logo_white.png) center/90% no-repeat;
    position: relative;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`


// 검색 input 관련
export const SearchAreaPostBox = styled.div`
    width: 500px;
    height: 40px;
    position: relative;
    @media screen and (max-width: 1024px) {
        width: 70%;
    }
`

export const SearchAreaInput = styled.input`
    width: 100%;
    height: 100%;
    border: 2px solid white;
    background-color: #87CEFA;
    padding: 5px 20px;
    color: white;
    font-size: 1.5rem;
    &::placeholder {
        color: white;
        font-size: 1.5rem;
    }
    &:focus {
        outline: none;
    }
    @media screen and (max-width: 1024px) {
        background-color: white;
        border: 2px solid #87CEFA;
        color: #87CEFA;
        font-size: 1.3rem;
        &::placeholder {
            color: #87CEFA;
            font-size: 1.3rem;
        }
    }
`

export const SearchAreaSubmit = styled.button`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 5px;
    top: 5px;
    background: url(./images/icons/search_btn_white.png) center/80% no-repeat;
    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.5) ;
    }
    @media screen and (max-width: 1024px) {
        background: url(./images/icons/search_btn_blue.png) center/80% no-repeat;
    }
`


// 검색창 종료 버튼 관련
export const SearchAreaClose = styled.button`
    width: 40px;
    height: 40px;
    background: url(./images/icons/close_white.png) center/60% no-repeat;
    &:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 1024px) {
        width: 30px;
        height: 30px;
        background: url(./images/icons/close_blue.png) center/60% no-repeat;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`