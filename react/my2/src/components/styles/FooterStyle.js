
import styled from 'styled-components';


export const FooterContainer = styled.footer`
    margin-top: 100px;
    width: 100%;
    height: 220px;
    background-color: rgb(240, 240, 240);
    @media screen and (max-width: 800px) {
        height: 300px;
    }
`

export const FooterInnerBox = styled.div`
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    padding: 40px 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
        width: 100%;
        padding: 40px 20px 10px;
    }
`

// Footer 윗 부분
export const UpperFooter = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    @media screen and (max-width: 800px) {
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const GitBox = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ProjectTitle = styled.h1`
    width: 100px;
    height: 100%;
    text-indent: -9999em;
    background: url(./images/icons/my2-logo_footer.png) center/90% no-repeat;
    opacity: 0.5;
    margin-right: 30px;
`

export const GitText = styled.span`
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
    color: rgb(150, 150, 150);
    font-size: 1.3rem;
`

export const GitLink = styled.span`
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
    color: rgb(150, 150, 150);
    font-size: 1.3rem;
    border: 1px solid rgb(150, 150, 150);
    border-radius: 15px;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

export const InfoBox = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 0;
    right: 0;
    @media screen and (max-width: 800px) {
        position: static;
        height: 100px;
        margin-left: auto;
    }
`

export const TextBox = styled.p`
    width: 100%;
    height: 25px;
    display: flex;
    gap: 10px;
    justify-content: end;
    color: rgb(150, 150, 150);
    font-size: 1.2rem;
`

export const TextTitle = styled.span`
    width: 100px;
    height: 100%;
    line-height: 25px;
    text-align: right;
`

export const TextContent = styled.span`
    width: 125px;
    height: 100%;
    line-height: 25px;
    text-align: right;
`



// Footer 밑 부분
export const UnderFooter = styled.div`
    width: 100%;
    height: 50px;
    border-top: 1px solid rgb(150, 150, 150);
`

export const UnderInfo = styled.p`
    width: 100%;
    margin-top: 5px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: rgb(150, 150, 150);
    font-size: 1.4rem;
    @media screen and (max-width: 800px) {
        font-size: 1.1rem;
    }
`