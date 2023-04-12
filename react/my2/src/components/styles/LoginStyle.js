import { Link } from "react-router-dom";
import styled from "styled-components";


// 로그인 외부 컨테이너
export const LoginContainer = styled.div`
    width: 400px;
    margin: 140px auto 0;
`

// 로그인 타이틀
export const LoginTitle = styled.h3`
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid #00BFFF;
    color: #00BFFF;
    font-size: 3rem;
    font-weight: bold;
    padding-left: 10px;
`

// 로그인 입력 컨테이너
export const LoginFormBox = styled.div`
    width: 100%;
    height: 200px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

// 로그인 입력 박스
export const LoginInputContainer = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
`

export const LoginInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 10px;
`

export const LoginValueInfo = styled.span`
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 1.4rem;
    background-color: white;
    height: 20px;
    line-height: 20px;
    padding: 0 10px;
`

// 로그인 버튼
export const LoginSubmit = styled.button`
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

// 회원가입, 아이디/비번 찾기 컨테이너
export const InfoContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 30px;
`

// 회원가입, 아이디/비번 찾기 박스
export const InfoBox = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    gap: 20px;
    padding: 0 40px;
    align-items: center;
`

// 회원가입, 아이디/비번 찾기 텍스트
export const InfoText = styled.span`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
`

// 회원가입, 아이디/비번 찾기 버튼
export const InfoBtn = styled(Link)`
    width: 30%;
    height: 80%;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #87CEFA;
    color: white;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        opacity: 0.5;
    }
`