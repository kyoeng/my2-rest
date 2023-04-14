import styled from "styled-components"

// 회원가입 외부 컨테이너
export const JoinContainer = styled.div`
    width: 400px;
    margin: 140px auto 0;
`

// 회원가입 타이틀
export const JoinTitle = styled.h3`
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid #00BFFF;
    color: #00BFFF;
    font-size: 3rem;
    font-weight: bold;
    padding-left: 10px;
`

// 입력창 컨테이너
export const JoinForm = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 60px;
`

// 입력창 입력 박스
export const JoinInputContainer = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
`

export const JoinInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 10px;
`

export const JoinValueInfo = styled.span`
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 1.4rem;
    background-color: white;
    height: 20px;
    line-height: 20px;
    padding: 0 10px;
`

// 잘못된 입력 시 안내문구를 위한 태그
export const JoinInputInfo = styled.div`
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: red;
    font-size: 1.2rem;
    position: absolute;
    left: 0;
    bottom: -30px;
    padding-left: 5px;
`

// id 중복체크 버튼
export const IdCheckBtn = styled.button`
    width: 80px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #00BFFF;
    color: white;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`

// pw 확인 이미지
export const PwCheckImg = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
`



// 이메일 인증 컨테이너
export const EmailAccountBox = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
`

// 이메일 인증 타이틀
export const EmailAccountTitle = styled.p`
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #00BFFF;
    color: #00BFFF;
    font-size: 2.2rem;
    font-weight: bold;
    padding-left: 10px;
`

// 이메일 입력창
export const EmailInputContainer = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
    margin-top: 20px;
`

export const EmailInput = styled.input`
    width: 47%;
    height: 70%;
    padding-left: 10px;
`

// 이메일 셀렉트
export const EmailSelecter = styled.select`
    width: 47%;
    height: 70%;
    padding-left: 10px;
`

// 직접 입력창
export const EmailWriteInput = styled.input`
    width: 47%;
    height: 70%;
    margin-left: auto;
    padding-left: 10px;
`

// 이메일 인증번호 요청 버튼
export const EmailAuthReq = styled.button`
    width: 100px;
    height: 35px;
    border: 2px solid #00BFFF;
    color: #00BFFF;
    font-size: 1.3rem;
    font-weight: bold;
    position: absolute;
    top: 67.5px;
    right: -120px;
    &:hover {
        cursor: pointer;
    }
`

// 이메일 인증 버튼
export const EmailAuthBtn = styled.button`
    width: 100%;
    height: 40px;
    text-align: center;
    background-color: #87CEFA;
    color: white;
    font-size: 1.8rem;
    margin-top: 20px;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

// 가입 버튼
export const JoinSubmit = styled.button`
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