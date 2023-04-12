import * as Lg from "../components/styles/LoginStyle";
import ScrollTop from "../components/commons/ScrollTop";

const Login = () => {

    return (
        <Lg.LoginContainer>
            <Lg.LoginTitle>Login</Lg.LoginTitle>

            <Lg.LoginFormBox>
                <Lg.LoginInputContainer>
                    <Lg.LoginInput type="text" />
                    <Lg.LoginValueInfo>ID</Lg.LoginValueInfo>
                </Lg.LoginInputContainer>

                <Lg.LoginInputContainer>
                    <Lg.LoginInput type="password" />
                    <Lg.LoginValueInfo>Password</Lg.LoginValueInfo>
                </Lg.LoginInputContainer>

                <Lg.LoginSubmit>로 그 인</Lg.LoginSubmit>
            </Lg.LoginFormBox>

            <Lg.InfoContainer>
                <Lg.InfoBox>
                    <Lg.InfoText>아직 회원이 아니신가요?</Lg.InfoText>
                    <Lg.InfoBtn to="/join" onClick={ScrollTop}>Join</Lg.InfoBtn>
                </Lg.InfoBox>

                <Lg.InfoBox>
                    <Lg.InfoText>계정을 잊으셨나요?</Lg.InfoText>
                    <Lg.InfoBtn to="/find" onClick={ScrollTop}>Find</Lg.InfoBtn>
                </Lg.InfoBox>
            </Lg.InfoContainer>
        </Lg.LoginContainer>
    );

}



export default Login;