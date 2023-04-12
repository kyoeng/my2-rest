import { useState } from "react";
import * as Ji from "../components/styles/JoinStyle";

const Join = () => {
    const [emailAuth, setEmailAuth] = useState(false);

    return (
        <Ji.JoinContainer>
            <Ji.JoinTitle>Join</Ji.JoinTitle>

            <Ji.JoinForm>
                <Ji.JoinInputContainer>
                    <Ji.JoinInput />
                    <Ji.JoinValueInfo>아이디 *</Ji.JoinValueInfo>
                </Ji.JoinInputContainer>

                <Ji.JoinInputContainer>
                    <Ji.JoinInput />
                    <Ji.JoinValueInfo>이름 *</Ji.JoinValueInfo>
                </Ji.JoinInputContainer>

                <Ji.JoinInputContainer>
                    <Ji.JoinInput />
                    <Ji.JoinValueInfo>패스워드 *</Ji.JoinValueInfo>
                </Ji.JoinInputContainer>

                <Ji.JoinInputContainer>
                    <Ji.JoinInput />
                    <Ji.JoinValueInfo>패스워드 확인 *</Ji.JoinValueInfo>
                </Ji.JoinInputContainer>

                <Ji.JoinInputContainer>
                    <Ji.JoinInput />
                    <Ji.JoinValueInfo>휴대폰 번호 *</Ji.JoinValueInfo>
                </Ji.JoinInputContainer>

                <Ji.EmailAccountBox style={emailAuth ? { display: 'none' } : { display: 'flex' }}>
                    <Ji.EmailAccountTitle>Email Authentication</Ji.EmailAccountTitle>

                    <Ji.EmailInputContainer>
                        <Ji.EmailInput />
                        @
                        <Ji.EmailSelecter>
                            <option>직접입력</option>
                            <option>naver.com</option>
                            <option>google.com</option>
                            <option>daum.net</option>
                            <option>yahoo.com</option>
                        </Ji.EmailSelecter>
                    </Ji.EmailInputContainer>

                    <Ji.EmailInputContainer style={{ marginTop: '0' }}>
                        <Ji.EmailWriteInput />
                    </Ji.EmailInputContainer>

                    <Ji.JoinInputContainer style={{ marginTop: '20px' }}>
                        <Ji.JoinInput />
                        <Ji.JoinValueInfo>인증 번호 *</Ji.JoinValueInfo>
                    </Ji.JoinInputContainer>

                    <Ji.EmailAuthReq>인증<br />번호<br />받기</Ji.EmailAuthReq>

                    <Ji.EmailAuthBtn>인 증 하 기</Ji.EmailAuthBtn>
                </Ji.EmailAccountBox>

                <Ji.JoinSubmit style={emailAuth ? { display: 'block' } : { display: 'none' }}>가 입 하 기</Ji.JoinSubmit>
            </Ji.JoinForm>
        </Ji.JoinContainer>
    );

};

export default Join;