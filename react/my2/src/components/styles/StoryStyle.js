import { Link } from "react-router-dom";
import styled from "styled-components";



// 외부 컨테이너
export const StoryContainer = styled.div`
    width: 1024px;
    margin: 130px auto 0;
    position: relative;
`

// 타이틀
export const StoryTitle = styled.h2`
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: #00BFFF;
    font-size: 3rem;
    font-weight: bold;
    margin: 0 auto;
    border-bottom: 3px solid #87CEFA;
    text-align: center;
`

// 스토리 작성 페이지로 가는 버튼
export const StoryRegBtn = styled(Link)`
    width: 110px;
    height: 40px;
    line-height: 36px;
    text-align: center;
    border: 2px solid #87CEFA;
    color: #00BFFF;
    font-size: 1.6rem;
    position: absolute;
    top: 10px;
    right: 0;
    &:hover {
        opacity: 0.7;
    }
`

// 스토리 뷰 결정할 select 태그
export const StoryTypeBox = styled.select`
    width: 110px;
    height: 40px;
    border: 2px solid #87CEFA;
    color: #00BFFF;
    padding-left: 10px;
    position: absolute;
    top: 10px;
    left: 0;
    &:hover {
        cursor: pointer;
    }
`


// 스토리 검색 버튼
export const SearchContainer = styled.div`
    width: 100%;
    height: 55px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const SearchType = styled.select`
    width: 100px;
    height: 100%;
    border: 3px solid #87CEFA;
    color: #00BFFF;
    padding-left: 10px;
`

export const SearchInput = styled.input`
    width: 600px;
    height: 100%;
    padding-left: 20px;
    border: 3px solid #87CEFA;
    font-size: 1.5rem;
`

export const SearchBtn = styled.button`
    width: 100px;
    height: 100%;
    background-color: #87CEFA;
    color: white;
    font-size: 1.7rem;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`




// 스토리 내용들 컨테이너
export const StoryContentContainer = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
`



// 하나의 스토리를 감싸는 컨테이너
export const StoryBox = styled.div`
    width: 320px;
    height: 320px;
    position: relative;
    border: 3px solid #87CEFA;
    border-radius: 30px;
    overflow: hidden;
    &:hover * {
        opacity: 1;
    }
`

export const StoryValue = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: all 0.5s;
`

export const StoryVideo = styled.video`
    width: 100%;
`

export const StoryTextBox = styled.div`
    width: 100%;
    height: 80px;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 10px 10px;
    display: flex;
    flex-direction: column;
`

export const StoryText = styled.span`
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 1.7rem;
    color: white;
`

export const StoryLikeView = styled.span`
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    color: white;
    font-size: 1.7rem;
    position: absolute;
    right: 0;
    top: 10px;
`

export const StoryLink = styled(Link)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`


export const StoryMoreBtn = styled.button`
    width: 100%;
    height: 50px;
    font-size: 1.7rem;
    color: #00BFFF;
    margin-top: 30px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    box-shadow: 0 2px 3px #87CEFA;
    &:hover {
        cursor: pointer;
        box-shadow: 0 1px 5px #00BFFF;
    }
`