import styled from "styled-components";


// Finder 외부 컨테이너
export const FinderContainer = styled.div`
    width: 1024px;
    margin: 130px auto 0;
`

// Finder 타이틀
export const FinderTitle = styled.h2`
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: #00BFFF;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
`

// Finder 설명
export const FinderInfo = styled.p`
    width: 100%;
    height: 50px;
    line-height: 30px;
    text-align: center;
    font-size: 1.7rem;
    color: #00BFFF;
    border-bottom: 2px solid #87CEFA;
`




// Finder 검색 박스
export const FinderSearchBox = styled.div`
    width: 500px;
    height: 50px;
    margin: 50px auto 0;
    position: relative;
`

// Finder 검색 입력창
export const FinderSearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: 2px solid #00BFFF;
    padding: 5px 20px;
    color: #00BFFF;
    font-size: 1.5rem;
    &::placeholder {
        color: #00BFFF;
        font-size: 1.5rem;
    }
    &:focus {
        outline: none;
    }
`

// Finder 검색 버튼
export const FinderSeachBtn = styled.button`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    background: url(./images/icons/search_btn_blue.png) center/cover;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`



// 검색 전 추천 여행지를 보여줄 태그
export const FinderBeforeSearch = styled.p`
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 2.3rem;
    text-align: center;
    color: #00BFFF;
    margin: 200px 0;
`

// 검색 결과 컨테이너
export const FinderResultContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    margin-top: 50px;
    position: relative;
`

// 검색 결과 내용 박스
export const ResultContentBox = styled.div`
    width: 424px;
    height: 100%;
    overflow: auto;
    border: 2px solid #87CEFA;
`

// 검색 결과 컨텐츠
export const ResultContents = styled.div`
    width: 100%;
    height: 180px;
    border-bottom:2px solid #87CEFA;
    padding: 30px;
    color: #00BFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
`

// 컨텐츠명
export const ResultTitle = styled.p`
    width: 100%;
    height: 50px;
    font-size: 2rem;
    font-weight: bold;
    line-height: 50px;
`

// 컨텐츠 주소
export const ResultAddr = styled.p`
    width: 70%;
    height: 30px;
    line-height: 30px;
    font-size: 1.2rem;
    color: grey;
`

// 지도에서 보기 버튼
export const ResultMapViewBtn = styled.button`
    width: 80px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    position: absolute;
    bottom: 45px;
    right: 30px;
    box-shadow: 0 0 5px #00BFFF;
    color: #00BFFF;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

// 공유 버튼
export const ResultShareBtn = styled.button`
    width: 35px;
    height: 35px;
    position: absolute;
    top: 45px;
    right: 30px;
    background: url(./images/icons/share_blue.png) center/80% no-repeat;
    box-shadow: 0 0 5px #00BFFF;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

// 검색 결과 지도
export const ResultMap = styled.div`
    width: 600px;
    height: 100%;
`