import styled from "styled-components";



// 디테일 외부 컨테이너
export const DetailContainer = styled.div`
    width: 1024px;
    margin: 130px auto 0;
`

// 디테일 타이틀
export const DetailTitle = styled.h2`
    width: 800px;
    height: 60px;
    line-height: 60px;
    color: #00BFFF;
    font-size: 3rem;
    font-weight: bold;
    margin: 0 auto;
    border-bottom: 3px solid #87CEFA;
    padding-left: 10px;
    display: flex;
    position: relative;
`

// 디테일 타이틀 글 정보
export const DetailTitleInfo = styled.span`
    height: 60px;
    line-height: 60px;
    color: #00BFFF;
    font-size: 2rem;
    font-weight: bold;
    margin-left: auto;
`




// 디테일 내용 박스
export const DetailBoardBox = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    margin: 50px auto 0;
    gap: 10px;
`

// 디테일 글 제목
export const DetailBoardTitle = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 2rem;
    font-weight: bold;
    color: #00BFFF;
`

// 디테일 글 정보 박스
export const DetailBoardInfo = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
`

// 글번호, 등록일 정보
export const DetailBoardInfoValues = styled.p`
    height: 100%;
    line-height: 40px;
    color: #00BFFF;
    font-size: 1.5rem;
    font-weight: bold;
`

// 글 내용
export const DetailBoardContentBox = styled.div`
    width: 100%;
    padding: 50px 20px;
    border: 2px solid #87CEFA;
    font-size: 1.4rem;
    color: gray;
    border-radius: 20px;
`





// 댓글
export const DetailCommentsBox = styled.div`
    width: 800px;
    margin: 80px auto 0;
    display: flex;
    flex-direction: column;
`

export const DetailCommentsTitle = styled.h3`
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 3px solid #87CEFA;
    font-size: 2rem;
    font-weight: bold;
    padding-left: 10px;
    color: #00BFFF;
`

export const DetailComments = styled.div`
    width: 100%;
    font-size: 1.5rem;
    color: gray;
    padding: 20px 10px;
    border-bottom: 2px solid #87CEFA;
`




// 댓글 등록
export const DetailCommentsRegBox = styled.div`
    width: 600px;
    height: 100px;
    margin: 30px auto 0;
    position: relative;
    border-top: 1px solid gray;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: gray;
`

export const CommentsTitle = styled.div`
    width: 150px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: -15px;
    left: calc((100% - 150px) / 2);
    font-size: 1.5rem;
    background-color: white;
`

export const CommentsInput = styled.textarea`
    width: 90%;
    height: 100%;
    resize: none;
    padding: 5px;
    overflow-y: auto;
    border: 1px solid gray;
`

export const CommentsRegBtn = styled.button`
    width: 8%;
    height: 100%;
    background-color: white;
    border: 1px solid gray;
    color: gray;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`


export const DelBtn = styled.button`
    width: 100px;
    height: 40px;
    background-color: #87CEFA;
    color: white;
    position: absolute;
    right: 0;
    top: -40px;
    font-size: 1.5rem;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`