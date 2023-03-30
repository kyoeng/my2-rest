import styled from 'styled-components';


// ProductList 가장 외부 컨테이너
export const ProductListContainer = styled.div`
    width: 100%;
    margin-top: 30px;
`

// ProductList의 제목 박스
export const ProTitleBox = styled.h3`
    width: 100%;
    height: 50px;
    position: relative;
`

// 제목 박스의 가운데 선
export const ProTitleLine = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 25px;
    border-bottom: 1.5px dashed #1E90FF;
`

// 제목
export const ProTitle = styled.span`
    width: 300px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    left: calc((100% - 300px) / 2);
    top: 5px;
    background-color: white;
    z-index: 1;
    font-size: 1.8rem;
    text-align: center;
    color: #1E90FF;
`

// 상품 박스에 대한 컨테이너
export const ProContainer = styled.div`
    margin-top: 30px;
    padding: 0 2px;
    width: 100%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`

// 상품 박스
export const Product = styled.div`
    width: 240px;
    height: 300px;
    background-color: #87CEFA;
`