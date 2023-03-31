import styled from 'styled-components';
import { Link } from 'react-router-dom';


// 배너의 컨테이너
export const BannerContainer = styled.div`
    width: 1024px;
    height: 500px;
    margin: 0 auto;
    position: relative;
    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 45vw;
    }
`

// 배너 리스트를 감싸는 박스
export const BannerList = styled.ul`
    width: 100%;
    height: 100%;
    position: relative;
`

// 배너 부분
export const Banners = styled.li`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    transition: all 1.5s;
    opacity: 0;
`

// 배너 안의 버튼
export const BannerComment = styled(Link)`
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 25px;
    color: white;
    background-color: #708090;
    position: absolute;
    bottom: 30px;
    right: 30px;
    @media screen and (max-width: 1024px) {
        width: 100px;
        height: 40px;
        border-radius: 20px;
        font-size: 1.1rem;
        line-height: 40px;
    }
`


// 배너 위에 슬라이드 버튼을 위한 컨테이너
export const BtnsContainer = styled.div`
    height: 40px;
    position: absolute;
    left: 30px;
    bottom: 30px;
    background-color: white;
    padding: 0 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    border: 3px solid #87CEFA;
    border-radius: 20px;
`

// 슬라이드 버튼
export const Btns = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #87CEFA;
    opacity: 0.3;
    transition: all 1.5s;
    &:hover {
        cursor: pointer;
    }
`