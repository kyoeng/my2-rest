import styled from "styled-components";



export const SdContainer = styled.div`
    width: 800px;
    margin: 130px auto 0;
`

export const SdTitle = styled.h2`
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: #00BFFF;
    font-size: 3rem;
    font-weight: bold;
    border-bottom: 3px solid #87CEFA;
    padding-left: 10px;
    display: flex;
`

export const SdTitleInfo = styled.span`
    height: 60px;
    line-height: 60px;
    color: #00BFFF;
    font-size: 2rem;
    font-weight: bold;
    margin-left: auto;
`

// 스토리 제목
export const StoryTitleTag = styled.h3`
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #00BFFF;
    font-size: 2rem;
    font-weight: bold;
    padding-left: 10px;
    margin-top: 30px;
`

// 스토리 지역
export const StoryAreaTag = styled.h3`
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #00BFFF;
    font-weight: bold;
    font-size: 1.6rem;
    padding-left: 30px;
`



// 스토리 이미지 부분
export const SdImgContainer = styled.div`
    width: 100%;
    height: 500px;
    margin-top: 30px;
    position: relative;
`

export const SlideBtn = styled.button`
    width: 50px;
    height: 80px;
    position: absolute;
    top: calc((100% - 80px) / 2);
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`

export const SlideBox = styled.ul`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
`

export const SlideImgsBox = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 1s;
`

export const SlideImg = styled.div`
    width: 500px;
    height: 100%;
`

export const SlideVideo = styled.video`
    width: 500px;
    height: 100%;
`






// 스토리 내용 부분
export const SdStoryContentBox = styled.div`
    width: 100%;
    margin-top: 50px;
    padding: 40px;
    border: 3px solid #87CEFA;
    border-radius: 30px;
    font-size: 1.7rem;
    line-height: 150%;
    position: relative;
    color: gray;
`

export const SdStoryContentTitle = styled.span`
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 2rem;
    font-weight: bold;
    color: #00BFFF;
    position: absolute;
    top: -25px;
    left: calc((100% - 100px) / 2);
    background-color: white;
`




// 댓글 부분
export const CmtContainer = styled.div`
    width: 100%;
    margin-top: 100px;
`

export const CmtTitle = styled.h3`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 1.8rem;
    color: #00BFFF;
    font-weight: bold;
    border-top: 3px solid #87CEFA;
    border-bottom: 3px solid #87CEFA;
`

export const CmtContent = styled.p`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    border-bottom: 2px solid #87CEFA;
    font-size: 1.5rem;
    color: gray;
`





export const CmtRegTitle = styled.div`
    width: 600px;
    height: 20px;
    justify-content: center;
    align-items: center;
    position: relative;
    border-bottom: 1px solid black;
    margin: 30px auto 0;
`

export const CmtRegTitleText = styled.span`
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 1.5rem;
    position: absolute;
    top: 0;
    left: calc((100% - 120px) / 2);
    background-color: white;
`

export const CmtRegBox = styled.div`
    width: 600px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto 0;
`

export const CmtInput = styled.input`
    width: 500px;
    height: 100%;
    padding: 20px;
`

export const CmtRegBtn = styled.button`
    width: 70px;
    height: 100%;
    border: 1px solid black;
    font-size: 1.5rem;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`