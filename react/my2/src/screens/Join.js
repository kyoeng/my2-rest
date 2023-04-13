import { useState, useRef } from "react";
import * as Ji from "../components/styles/JoinStyle";

const Join = () => {
    // ID input value
    const [inputId, setInputId] = useState("");

    const infoBox = useRef([]);     // 안내문구 태그에 대한 배열

    // 인증 여부에 대한 상태 값
    const [emailAuth, setEmailAuth] = useState(false);

    console.log("hi");
    console.log(infoBox);

    return (
        <Ji.JoinContainer>
            <Ji.JoinTitle>Join</Ji.JoinTitle>

            <Ji.JoinForm>
                <Ji.JoinInputContainer>
                    <Ji.JoinInput type="text" value={inputId} onChange={(e) => setInputId(e.target.value)} maxLength="15" />
                    <Ji.JoinValueInfo>아이디 *</Ji.JoinValueInfo>
                    <Ji.JoinInputInfo ref={(e) => infoBox.current[0] = e}></Ji.JoinInputInfo>
                </Ji.JoinInputContainer>

                <Ji.JoinInputContainer>
                    <Ji.JoinInput type="text" />
                    <Ji.JoinValueInfo>이름 *</Ji.JoinValueInfo>
                </Ji.JoinInputContainer>

                <Ji.JoinInputContainer>
                    <Ji.JoinInput type="password" />
                    <Ji.JoinValueInfo>패스워드 *</Ji.JoinValueInfo>
                    <Ji.JoinInputInfo ref={(e) => infoBox.current[1] = e}></Ji.JoinInputInfo>
                </Ji.JoinInputContainer>

                <Ji.JoinInputContainer>
                    <Ji.JoinInput type="password" />
                    <Ji.JoinValueInfo>패스워드 확인 *</Ji.JoinValueInfo>
                    <Ji.JoinInputInfo ref={(e) => infoBox.current[2] = e}></Ji.JoinInputInfo>
                </Ji.JoinInputContainer>

                <Ji.JoinInputContainer>
                    <Ji.JoinInput type="text" />
                    <Ji.JoinValueInfo>휴대폰 번호 *</Ji.JoinValueInfo>
                    <Ji.JoinInputInfo ref={(e) => infoBox.current[3] = e}></Ji.JoinInputInfo>
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
                        <Ji.JoinInput type="text" />
                        <Ji.JoinValueInfo>인증 번호 *</Ji.JoinValueInfo>
                    </Ji.JoinInputContainer>

                    <Ji.EmailAuthReq>인증번호 요청</Ji.EmailAuthReq>

                    <Ji.EmailAuthBtn>인 증 하 기</Ji.EmailAuthBtn>
                </Ji.EmailAccountBox>

                <Ji.JoinSubmit style={emailAuth ? { display: 'block' } : { display: 'none' }}>가 입 하 기</Ji.JoinSubmit>
            </Ji.JoinForm>
        </Ji.JoinContainer>
    );

};

export default Join;