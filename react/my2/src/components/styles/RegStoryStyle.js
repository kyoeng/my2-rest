import styled from "styled-components";


// 외부 컨테이너
export const RegStoryContainer = styled.div`
    width: 1024px;
    margin: 130px auto 0;
`

// 타이틀
export const RegStoryTitle = styled.h2`
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




// 미리보기 관련
export const PreviewTitle = styled.p`
    width: 600px;
    height: 50px;
    margin: 20px auto 0;
    line-height: 50px;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    color: #00BFFF;
    display: none;
`

export const PreviewContainer = styled.div`
    width: 600px;
    margin: 0 auto 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`

export const Previews = styled.img`
    width: 180px;
    height: 150px;
`

export const PreviewsVideo = styled.video`
    width: 180px;
    height: 150px;
`




// 데이터 입력 컨테이너
export const RegStoryDataBox = styled.div`
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

// 사진 올리기 관련
export const RegStoryUploadBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 60px;
`

export const RegStoryUploadText = styled.p`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
`

export const RegStoryFile = styled.input`
    display: none;
`

export const RegStoryLabel = styled.label`
    width: 40%;
    height: 100%;
    background-color: #87CEFA;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    border-radius: 30px;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`



// 데이터 input 관련
export const RegStoryInputBox = styled.div`
    width: 100%;
    height: 60px;
    position: relative;
`

export const RegStoryInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 30px;
    border: 2px solid #00BFFF;
`

export const RegStoryValueInfo = styled.span`
    position: absolute;
    top: -10px;
    left: 40px;
    font-size: 1.4rem;
    background-color: white;
    height: 20px;
    line-height: 20px;
    padding: 0 10px;
`


// 데이터 textarea 관련
export const RegStoryTextBox = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
`

export const RegStoryText = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 30px;
    border: 2px solid #00BFFF;
    resize: none;
`



// 버튼 컨테이너
export const ButtonContaner = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
`


// 버튼
export const RegStoryBtn = styled.button`
    height: 60px;
    background-color: #87CDFA;
    color: white;
    font-size: 2.2rem;
    font-weight: bold;
    border-radius: 30px;
    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`