import { Link } from "react-router-dom";
import styled from "styled-components";



// 게시판 외부 컨테이너
export const BoardContainer = styled.div`
    width: 1024px;
    margin: 130px auto 0;
    position: relative;
`

// 게시판 타이틀
export const BoardTitle = styled.h2`
    width: 600px;
    height: 60px;
    line-height: 60px;
    color: #00BFFF;
    font-size: 3rem;
    font-weight: bold;
    margin: 0 auto;
    border-bottom: 3px solid #87CEFA;
    padding-left: 10px;
`

// 공지사항, 자유게시판 버튼 컨테이너
export const BoardTypeContainer = styled.div`
    width: 600px;
    height: 80px;
    margin: 30px auto 0;
    display: flex;
`

export const BoardTypeBtn = styled.button`
    width: 300px;
    height: 100%;
    color: #00BFFF;
    border: 2px solid #87CEFA;
    font-size: 2rem;
    &:hover {
        cursor: pointer;
    }
`





// 공지사항 =============================
export const PostContainer = styled.div`
    width: 100%;
    position: relative;
`

// 공지사항 등록
export const PostRegBtn = styled.button`
    position: absolute;
    top: -50px;
    right: 0;
    width: 80px;
    height: 40px;
    background-color: #87CEFA;
    color: white;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

// 공지사항 바
export const PostInfoBar = styled.div`
    width: 100%;
    height: 50px;
    margin: 50px 0 0;
    border-top: 2px solid #87CEFA;
    border-bottom: 2px solid #87CEFA;
    display: flex;
    justify-content: space-evenly;
`

export const PostInfoTitle = styled.span`
    width: 500px;
    height: 100%;
    line-height: 50px;
    font-size: 1.6rem;
    color: #00BFFF;
    text-align: center;
    font-weight: bold;
`

export const PostInfoId = styled.span`
    width: 100px;
    height: 100%;
    line-height: 50px;
    font-size: 1.6rem;
    color: #00BFFF;
    text-align: center;
    font-weight: bold;
`

export const PostInfoReg = styled.span`
    width: 200px;
    height: 100%;
    line-height: 50px;
    font-size: 1.6rem;
    color: #00BFFF;
    text-align: center;
    font-weight: bold;
`

export const PostInfoBtn = styled.span`
    width: 100px;
    height: 100%;
    font-size: 1.6rem;
    line-height: 50px;
    color: #00BFFF;
    text-align: center;
    font-weight: bold;
`

// 공지사항 데이터 View처리
export const PostBox = styled.div`
    width: 100%;
    border-bottom: 1px solid #87CEFA;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`

export const PostTitle = styled.span`
    width: 500px;
    height: 80px;
    line-height: 80px;
    font-size: 1.4rem;
    color: #00BFFF;
    text-align: center;
`

export const PostReg = styled.span`
    width: 200px;
    height: 80px;
    line-height: 80px;
    font-size: 1.4rem;
    color: #00BFFF;
    text-align: center;
`

export const PostBtn = styled.button`
    width: 100px;
    height: 45px;
    font-size: 1.4rem;
    color: white;
    text-align: center;
    background-color: #87CEFA;
    &:hover {
        cursor: pointer;
    }
`

export const PostValue = styled.div`
    width: 100%;
    padding: 10px 50px;
    text-align: center;
    font-size: 1.4rem;
    border-top: 1px solid #87CEFA;
    color: #00BFFF;
    font-weight: bold;
    display: none;
`


// 자유게시판 =============================
export const FreeContainer = styled.div`
    width: 100%;
    position: relative;
`

export const FreeRegBtn = styled.button`
    position: absolute;
    top: 40px;
    right: 0;
    width: 80px;
    height: 40px;
    background-color: #87CEFA;
    color: white;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

// 자유게시판 바
export const FreeInfoBar = styled.div`
    width: 100%;
    height: 50px;
    margin: 50px 0 0;
    border-top: 2px solid #87CEFA;
    border-bottom: 2px solid #87CEFA;
    display: flex;
    justify-content: space-evenly;
`

export const FreeInfoSeq = styled.span`
    width: 100px;
    height: 100%;
    line-height: 50px;
    font-size: 1.6rem;
    color: #00BFFF;
    text-align: center;
    font-weight: bold;
`

export const FreeInfoTitle = styled.span`
    width: 500px;
    height: 100%;
    line-height: 50px;
    font-size: 1.6rem;
    color: #00BFFF;
    text-align: center;
    font-weight: bold;
`

export const FreeInfoId = styled.span`
    width: 100px;
    height: 100%;
    line-height: 50px;
    font-size: 1.6rem;
    color: #00BFFF;
    text-align: center;
    font-weight: bold;
`

export const FreeBox = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #87CEFA;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
`

export const FreeSeq = styled.span`
    width: 100px;
    height: 100%;
    line-height: 80px;
    font-size: 1.6rem;
    color: #00BFFF;
    text-align: center;
`

export const FreeTitle = styled.span`
    width: 500px;
    height: 100%;
    line-height: 80px;
    font-size: 1.6rem;
    color: #00BFFF;
    text-align: center;
`

export const FreeId = styled.span`
    width: 100px;
    height: 100%;
    line-height: 80px;
    font-size: 1.6rem;
    color: #00BFFF;
    text-align: center;
`

export const FreeReg = styled.span`
    width: 200px;
    height: 100%;
    line-height: 80px;
    font-size: 1.6rem;
    color: #00BFFF;
    text-align: center;
`

export const FreeLink = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &:hover {
        background-color: white;
        opacity: 0.5;
    }
`





export const FreeInfoReg = styled.span`
    width: 200px;
    height: 100%;
    line-height: 50px;
    font-size: 1.6rem;
    color: #00BFFF;
    text-align: center;
    font-weight: bold;
`

// 자유게시판 검색
export const FreeSearchBox = styled.div`
    width: 600px;
    height: 50px;
    margin: 50px auto 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
`

export const FreeSearchType = styled.select`
    width: 100px;
    height: 100%;
    font-size: 1.35rem;
    padding-left: 15px;
    border: 2px solid #87CEFA;
    color: #00BFFF;
`

export const FreeSearchInput = styled.input`
    width: 440px;
    height: 100%;
    font-size: 1.5rem;
    padding: 5px 20px;
    border: 2px solid #87CEFA;
    color: #00BFFF;
    &::placeholder {
        color: white;
        font-size: 1.5rem;
    }
    &:focus {
        outline: none;
    }
`

export const FreeSearchBtn = styled.button`
    width: 60px;
    height: 35px;
    background-color: #87CEFA;
    color: white;
    position: absolute;
    top: 7.5px;
    right: 27.5px;
    font-size: 1.4rem;
    &:hover {
        cursor: pointer;
    }
`

// 자유게시판 등록
export const RegiContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    background-color: rgba(0, 0, 0, 0.5);
`

export const RegiBox = styled.div`
    width: 500px;
    height: 500px;
    position: absolute;
    top: calc((100% - 500px) / 2);
    left: calc((100% - 500px) / 2);
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
`

export const RegiTitle = styled.h3`
    width: 100%;
    height: 50px;
    border-bottom: 3px solid #87CEFA;
    color: #00BFFF;
    font-size: 2.2rem;
    line-height: 50px;
    padding-left: 10px;
    font-weight: bold;
`

export const InputContainer = styled.div`
    width: 100%;
    position: relative;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 10px;
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 10px;
    resize: none;
`

export const ValueInfo = styled.span`
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 1.4rem;
    background-color: white;
    height: 20px;
    line-height: 20px;
    padding: 0 10px;
`

export const RegiButton = styled.button`
    width: 100%;
    height: 60px;
    background-color: #87CEFA;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

export const RegiClose = styled.button`
    width: 40px;
    height: 40px;
    background: url(./images/icons/close_white.png) center/cover;
    position: absolute;
    top: 30px;
    right: 30px;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`




// 공통 (페이징)
export const PagingBox = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 30px;
`

export const PagingBtn = styled.button`
    width: 30px;
    height: 100%;
    border: 1px solid #00BFFF;
    color: #00BFFF;
    font-size: 1.2rem;
    &:hover {
        cursor: pointer;
    }
`