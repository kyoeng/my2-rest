import * as Lg from "../components/styles/LoginStyle";
import ScrollTop from "../components/commons/ScrollTop";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toSpringBoot } from "../components/commons/Axioses";
import { setCookie } from './../components/commons/Cookie';

const Login = () => {
    const [inputId, setInputId] = useState("");     // id input value
    const [inputPw, setInputPw] = useState("");     // pw input value

    // url 변경을 위한 변수
    const navi = useNavigate();

    // 로그인 버튼
    function login() {
        toSpringBoot({
            url: "/login",
            method: "post",
            data: {
                "userId": inputId,
                "password": inputPw
            }
        }).then((res) => {
            if (res.status === 200 && res.data !== null) {
                setCookie("token", res.data.token);
                setCookie("image", res.data.image);
                navi("/", { replace: true });
                window.location.reload();
            } else {
                alert("아이디, 비밀번호를 확인 후 다시 시도해주세요.");
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <Lg.LoginContainer>
            <Lg.LoginTitle>Login</Lg.LoginTitle>

            <Lg.LoginFormBox>
                <Lg.LoginInputContainer>
                    <Lg.LoginInput type="text" value={inputId} onChange={(e) => setInputId(e.target.value)} />
                    <Lg.LoginValueInfo>ID</Lg.LoginValueInfo>
                </Lg.LoginInputContainer>

                <Lg.LoginInputContainer>
                    <Lg.LoginInput type="password" value={inputPw} onChange={(e) => setInputPw(e.target.value)} />
                    <Lg.LoginValueInfo>Password</Lg.LoginValueInfo>
                </Lg.LoginInputContainer>

                <Lg.LoginSubmit onClick={login}>로 그 인</Lg.LoginSubmit>
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