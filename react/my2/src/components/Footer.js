import * as Foot from "./styles/FooterStyle";

const Footer = () => {

    return (
        <Foot.FooterContainer>
            <Foot.FooterInnerBox>
                <Foot.UpperFooter>
                    <Foot.GitBox>
                        <Foot.ProjectTitle>
                            MY2
                        </Foot.ProjectTitle>

                        <Foot.GitText>
                            이 사이트의 Git 주소
                        </Foot.GitText>

                        <Foot.GitLink onClick={() => window.open('https://github.com/kyoeng/my2-rest')}>
                            여기를 클릭하세요
                        </Foot.GitLink>
                    </Foot.GitBox>

                    <Foot.InfoBox>
                        <Foot.TextBox>
                            <Foot.TextTitle>제작자 :</Foot.TextTitle>
                            <Foot.TextContent>경진우</Foot.TextContent>
                        </Foot.TextBox>

                        <Foot.TextBox>
                            <Foot.TextTitle>핸드폰 번호 :</Foot.TextTitle>
                            <Foot.TextContent>010-9381-2053</Foot.TextContent>
                        </Foot.TextBox>

                        <Foot.TextBox>
                            <Foot.TextTitle>이메일 주소 :</Foot.TextTitle>
                            <Foot.TextContent>rudwlsdn@naver.com</Foot.TextContent>
                        </Foot.TextBox>
                    </Foot.InfoBox>
                </Foot.UpperFooter>

                <Foot.UnderFooter>
                    <Foot.UnderInfo>
                        이 사이트는 상업적 목적이 아닌 공부의 목적으로 제작된 사이트입니다.
                    </Foot.UnderInfo>
                </Foot.UnderFooter>
            </Foot.FooterInnerBox>
        </Foot.FooterContainer>
    );

}


export default Footer;