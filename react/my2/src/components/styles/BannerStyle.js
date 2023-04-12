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

// 버튼
export const BannerComment = styled(Link)`
    width: 150px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;
    box-shadow: 0 0 10px #00BFFF;
    color: #00BFFF;
    background-color: white;
    position: absolute;
    bottom: 30px;
    right: 30px;
    &:hover {
        opacity: 0.8;
    }
    @media screen and (max-width: 1024px) {
        width: 100px;
        height: 40px;
        border-radius: 20px;
        font-size: 1.1rem;
        line-height: 40px;
    }
`