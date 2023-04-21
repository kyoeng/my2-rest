import styled from "styled-components"


export const PartyContainer = styled.div`
    width: 1024px;
    margin: 50px auto 0;
    @media screen and (max-width: 1024px) {
        width: 100%;
        margin: 50px 0 0;
    }
`

export const PartyTitleBox = styled.h3`
    width: 100%;
    height: 50px;
    position: relative;
    @media screen and (max-width: 800px) {
        height: 30px;
    }
`

export const PartyTitleLine = styled.div`
    width: 100%;
    height: 25px;
    border-bottom: 3px dashed #87CEFA;
    @media screen and (max-width: 800px) {
        height: 15px;
        border-bottom: 2px dashed #87CEFA;
    }
`

export const PartyTitleText = styled.span`
    width: 300px;
    height: 100%;
    line-height: 50px;
    text-align: center;
    position: absolute;
    top: 0;
    left: calc((100% - 300px) / 2);
    font-size: 2rem;
    color: #87CEFA;
    background-color: white;
    font-weight: bold;
    @media screen and (max-width: 800px) {
        width: 200px;
        left: calc((100% - 200px) / 2);
        line-height: 30px;
        font-size: 1.6rem;
    }
`

export const PartyContentBox = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    padding: 12px;
    position: relative;
    @media screen and (max-width: 1024px) {
        height: 780px;
        flex-direction: column;
        align-content: center;
    }
`

export const PartyContentValue = styled.div`
    width: 490px;
    height: 180px;
    display: flex;
    position: relative;
    @media screen and (max-width: 1024px) {
        width: 80%;
        height: 24%;
        justify-content: center;
    }
`

export const PartyContentData = styled.div`
    width: 350px;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const PartyTitle = styled.p`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: #00BFFF;
    font-weight: bold;
    @media screen and (max-width: 800px) {
        font-size: 1.3rem;
    }
`

export const PartyInfoBox = styled.p`
    width: 100%;
    height: 25%;
    display: flex;
    gap: 10px;
    font-size: 1.3rem;
    @media screen and (max-width: 800px) {
        font-size: 1.1rem;
    }
`

export const PartyInfoName = styled.span`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PartyInfoValue = styled.span`
    width: 75%;
    height: 100%;
    display: flex;
    align-items: center;
`

export const PartyContentImg = styled.img`
    display: block;
    width: 140px;
    height: 100%;
    padding: 10px;
`

export const PartyLink = styled.a`
    position: absolute;
    width: 100%;
    height: 100%;
    &:hover {
        box-shadow: 0 0 10px #87CEFA;
    }
`
