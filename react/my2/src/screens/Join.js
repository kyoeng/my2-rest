import { useState, useRef } from "react";
import * as Ji from "../components/styles/JoinStyle";
import { toSpringBoot } from "../components/commons/Axioses";
import { useNavigate } from "react-router-dom";


const Join = () => {
    // 회원가입 필수 값에 대한 인식을 위한 변수들
    const [idOk, setIdOk] = useState(false);
    const [pwOk, setPwOk] = useState(false);
    const [nameOk, setNameOk] = useState(false);
    const [phoneOk, setPhoneOk] = useState(false);

    // 이메일 인증시 필요한 값에 대한 변수들
    const [emailId, setEmailId] = useState("");                 // 이메일 아이디
    const [emailSelect, setEmailSelect] = useState("");         // 이메일 Select 값
    const [emailWrite, setEmailWrite] = useState("");           // 직접입력
    const [inputAuthNum, setInputAuthNum] = useState("");       // 입력받을 인증번호
    const [emailAuthNum, setEmailAuthNum] = useState("");       // 이메일 인증번호

    // input values
    const [inputId, setInputId] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputPwCheck, setInputPwCheck] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    // 아이디 중복체크 버튼 활성화를 위한 변수
    const [idCheckBtn, setIdCheckBtn] = useState(false);
    // 이메일 인증 여부에 대한 상태 값
    const [emailAuth, setEmailAuth] = useState(false);

    // ID input 태그에 대한 변수
    const idInputBox = useRef();
    // 안내문구 태그에 대한 배열
    const infoBox = useRef([]);
    // 이메일 인증 직접입력에 대한 변수
    const wirteEmail = useRef();

    // url 변경을 위한 변수
    const navi = useNavigate();


    // id change event
    function idChange(e) {
        setInputId(e.target.value);

        if (e.target.value.length < 8 || e.target.value.length > 15) {
            setIdCheckBtn(false);
        } else {
            setIdCheckBtn(true);
        }
    }

    // id focusOut event
    function idFocusOut() {
        if (inputId.length < 8 || inputId.length > 15) {
            infoBox.current[0].innerText = "아이디는 8 ~ 15 자리로 만들어야 합니다.";
        } else {
            infoBox.current[0].innerText = "";
        }
    }

    // Name focusOut event
    function NameFocusOut() {
        if (inputName.length < 1) {
            infoBox.current[1].innerText = "이름은 필수입력 사항입니다.";
        } else {
            infoBox.current[1].innerText = "";
            setNameOk(true);
        }
    }

    // password focusOut event
    function pwFocusOut() {
        if (inputPw.length < 8) {
            infoBox.current[2].innerText = "패스워드는 8자리 이상이어야 합니다.";
        } else if (inputPw.replace(/[!-*, @]/gi, "").length >= inputPw.length) {
            infoBox.current[2].innerText = "패스워드는 영문, 숫자, 특수문자를 반드시 포함해야 합니다.";
        } else if (inputPw.replace(/[a-z]/gi, "").length >= inputPw.length) {
            infoBox.current[2].innerText = "패스워드는 영문, 숫자, 특수문자를 반드시 포함해야 합니다.";
        } else if (inputPw.replace(/[0-9]/gi, "").length >= inputPw.length) {
            infoBox.current[2].innerText = "패스워드는 영문, 숫자, 특수문자를 반드시 포함해야 합니다.";
        } else {
            infoBox.current[2].innerText = "";
        }
    }

    // password check change event
    function pwCheckChange(e) {
        setInputPwCheck(e.target.value);

        if (e.target.value === inputPw) {
            infoBox.current[3].style.background = "url(./images/icons/ok_blue.png) center/90% no-repeat";
            setPwOk(true);
        } else {
            infoBox.current[3].style.background = "url(./images/icons/nope_blue.png) center/90% no-repeat";
        }
    }

    // phone change event
    function phoneChange(e) {
        if (e.target.value.replace(/[0-9]/gi, "").length > 0) {
            infoBox.current[4].innerText = "'-'을 제외하고 입력해주세요.";
        } else {
            setInputPhone(e.target.value);
            infoBox.current[4].innerText = "";
        }
    }

    // phone focusOut event
    function phoneFocusOut() {
        if (inputPhone.length < 11) {
            infoBox.current[4].innerText = "휴대폰번호 11자리를 입력해주세요.";
        } else {
            setPhoneOk(true);
            infoBox.current[4].innerText = "";
        }
    }

    // Email selector event
    function selectChange(e) {
        if (e.target.value === 'w') {
            wirteEmail.current.disabled = false;
        } else {
            wirteEmail.current.disabled = true;
            setEmailSelect(e.target.value);
        }
    }



    // Request 요청 (ID Check)
    function reqIdCheck() {
        toSpringBoot({
            url: "/id-check",
            method: "get",
            params: {
                "id": inputId
            }
        }).then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                if (res.data) {
                    if (window.confirm("사용이 가능한 아이디입니다. 사용하시겠습니까?")) {
                        idInputBox.current.disabled = true;
                        setIdOk(true);
                        setIdCheckBtn(false);
                    } else {
                        idInputBox.current.focus();
                    }
                } else {
                    alert("중복되는 아이디입니다.");
                }
            } else {
                alert("다시 시도해주세요.");
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    // Request 요청 (이메일 인증번호 요청)
    function reqEmailAuth() {
        let eID = emailId, eSlec = emailSelect;
        if (eSlec === 'w') eSlec = emailWrite;

        if (eID.length < 1 || eSlec.length < 1) {
            alert("이메일을 정상적으로 입력 후 다시 시도해주세요.");
        } else {
            let email = eID + "@" + eSlec;

            setInputEmail(email);

            toSpringBoot({
                url: "/mail-auth",
                method: "post",
                data: {
                    "email": email
                }
            }).then((res) => {
                if (res.status === 200 && res.data !== null) {
                    alert("인증번호가 발송되었습니다.");
                    setEmailAuthNum(res.data + "");
                } else {
                    alert("인증번호 요청에 실패하였습니다. 확인 후 다시 시도해주세요.");
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }


    // Email Auth Button
    function authEmail() {
        if (emailAuthNum === inputAuthNum) {
            alert("이메일 인증이 완료되었습니다.");
            setEmailAuth(true);
        } else {
            alert("인증번호가 일치하지 않습니다.");
        }
    }


    // 회원가입 버튼
    function letsJoin() {
        if (idOk && pwOk && nameOk && phoneOk && emailAuth) {
            toSpringBoot({
                url: "/join",
                method: "post",
                data: {
                    "userId": inputId,
                    "password": inputPw,
                    "userName": inputName,
                    "userPhone": inputPhone,
                    "userEmail": inputEmail
                }
            }).then((res) => {
                if (res.status === 200 && res.data) {
                    alert("가입에 성공하였습니다. 로그인 후 이용해주세요.");
                    return navi("/login", { replace: true });
                } else {
                    alert("가입에 실패하였습니다. 다시 시도해주세요.");
                }
            }).catch((err) => {
                console.log(err);
            })
        } else {
            console.log("nope");
        }
    }

    return (
        <Ji.JoinContainer>
            <Ji.JoinTitle>Join</Ji.JoinTitle>

            <Ji.JoinForm>
                {/* 회원가입 입력 사항 */}
                <Ji.JoinInputContainer>
                    <Ji.JoinInput type="text" value={inputId} onBlur={idFocusOut}
                        onChange={(e) => idChange(e)} maxLength="15" ref={idInputBox} />

                    <Ji.JoinValueInfo>아이디 *</Ji.JoinValueInfo>

                    <Ji.IdCheckBtn onClick={reqIdCheck} disabled={idCheckBtn ? false : true}
                        style={idCheckBtn ? { opacity: '1', cursor: "pointer" } : { opacity: '0.5', cursor: "auto" }}>
                        중복확인
                    </Ji.IdCheckBtn>

                    <Ji.JoinInputInfo ref={(e) => infoBox.current[0] = e}></Ji.JoinInputInfo>
                </Ji.JoinInputContainer>

                <Ji.JoinInputContainer>
                    <Ji.JoinInput type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} onBlur={NameFocusOut} />
                    <Ji.JoinValueInfo>이름 *</Ji.JoinValueInfo>
                    <Ji.JoinInputInfo ref={(e) => infoBox.current[1] = e}></Ji.JoinInputInfo>
                </Ji.JoinInputContainer>

                <Ji.JoinInputContainer>
                    <Ji.JoinInput type="password" value={inputPw} onChange={(e) => setInputPw(e.target.value)} onBlur={pwFocusOut} />
                    <Ji.JoinValueInfo>패스워드 *</Ji.JoinValueInfo>
                    <Ji.JoinInputInfo ref={(e) => infoBox.current[2] = e}></Ji.JoinInputInfo>
                </Ji.JoinInputContainer>

                <Ji.JoinInputContainer>
                    <Ji.JoinInput type="password" value={inputPwCheck} onChange={(e) => pwCheckChange(e)} />
                    <Ji.JoinValueInfo>패스워드 확인 *</Ji.JoinValueInfo>
                    <Ji.PwCheckImg ref={(e) => infoBox.current[3] = e} />
                </Ji.JoinInputContainer>

                <Ji.JoinInputContainer>
                    <Ji.JoinInput type="text" value={inputPhone} onChange={(e) => phoneChange(e)} onBlur={phoneFocusOut} />
                    <Ji.JoinValueInfo>휴대폰 번호 *</Ji.JoinValueInfo>
                    <Ji.JoinInputInfo ref={(e) => infoBox.current[4] = e}></Ji.JoinInputInfo>
                </Ji.JoinInputContainer>

                {/* 이메일 인증 */}
                <Ji.EmailAccountBox style={emailAuth ? { display: 'none' } : { display: 'flex' }}>
                    <Ji.EmailAccountTitle>Email Authentication</Ji.EmailAccountTitle>

                    <Ji.EmailInputContainer>
                        <Ji.EmailInput onChange={(e) => setEmailId(e.target.value)} />
                        @
                        <Ji.EmailSelecter onChange={selectChange}>
                            <option value="w">직접입력</option>
                            <option value="naver.com">naver.com</option>
                            <option value="gmail.com">gmail.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="yahoo.com">yahoo.com</option>
                        </Ji.EmailSelecter>
                    </Ji.EmailInputContainer>

                    <Ji.EmailInputContainer style={{ marginTop: '0' }}>
                        <Ji.EmailWriteInput value={emailWrite} onChange={(e) => setEmailWrite(e.target.value)} ref={wirteEmail} />
                    </Ji.EmailInputContainer>

                    <Ji.JoinInputContainer style={{ marginTop: '20px' }}>
                        <Ji.JoinInput type="text" onChange={(e) => setInputAuthNum(e.target.value)} />
                        <Ji.JoinValueInfo>인증 번호 *</Ji.JoinValueInfo>
                    </Ji.JoinInputContainer>

                    <Ji.EmailAuthReq onClick={reqEmailAuth}>인증번호 요청</Ji.EmailAuthReq>

                    <Ji.EmailAuthBtn onClick={authEmail}>인 증 하 기</Ji.EmailAuthBtn>
                </Ji.EmailAccountBox>

                {/* 가입하기 버튼 */}
                <Ji.JoinSubmit onClick={letsJoin} style={emailAuth ? { display: 'block' } : { display: 'none' }}>가 입 하 기</Ji.JoinSubmit>
            </Ji.JoinForm>
        </Ji.JoinContainer>
    );

};

export default Join;