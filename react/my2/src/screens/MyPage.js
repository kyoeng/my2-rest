import { useState, useEffect, useRef } from "react";
import { getCookie, setCookie } from "../components/commons/Cookie";
import * as My from "../components/styles/MyPageStyle";
import { toSpringBoot, toSpringWithToken } from "../components/commons/Axioses";
import ScrollTop from './../components/commons/ScrollTop';



export default function MyPage() {
    const [inputPw, setInputPw] = useState("");             // 비밀번호
    const [inputCheckP, setInputCheckP] = useState("");     // 비밀번호 확인

    const [navStatus, setNavStatus] = useState(1);      // 마이페이지 메뉴를 위한 변수

    // 내정보를 위한 객체
    const [myinfo, setMyinfo] = useState({
        "id": "",
        "name": "",
        "phone": "",
        "email": ""
    });

    const fileInput = useRef();         // 파일 input 태그
    const previewContainer = useRef();  // 미리보기 컨테이너
    const previewImage = useRef();      // 미리보기 이미지 태그

    const pwInfoText = useRef();        // PW 변경 시 메시지를 위한 태그
    const pwCheckImg = useRef();        // PW 확인 시 안내 이미지

    const [chPwOk, setChPwOk] = useState(false);    // 비밀번호 변경 요청 실행 가능에 대한 변수



    // select nav style
    const selectNav = {
        border: "2px solid #87CEFA",
        backgroundColor: "white",
        color: "#87CEFA"
    }


    // Spring 서버로 요청 ==============
    useEffect(() => {
        if (navStatus === 2) {
            console.log("hi");
            toSpringBoot({
                url: "/auth/get-info",
                method: "get",
                headers: {
                    Authorization: `Bearer ${getCookie("token")}`
                },
                params: {
                    "userId": getCookie("id")
                }
            }).then((res) => {
                if (res.status === 200 && res.data !== null) {
                    setMyinfo({
                        "id": res.data.userId,
                        "name": res.data.userName,
                        "phone": res.data.userPhone,
                        "email": res.data.userEmail
                    });
                } else {
                    setNavStatus(1);
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }, [navStatus]);
    // ===============================


    // 이미지 미리보기
    function ImagePreview() {
        const file = fileInput.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            previewContainer.current.style.display = "flex";
            previewImage.current.setAttribute("src", reader.result);
        }
    }


    // 이미지 변경 요청
    function changeImage() {
        let formData = new FormData();

        formData.append("userId", getCookie("id"));
        formData.append("userImage", getCookie("image"));
        formData.append("file", fileInput.current.files[0]);

        toSpringWithToken({
            method: "put",
            url: "/ch-img",
            headers: {
                "Content-Type": "multiple/form-data"
            },
            data: formData
        }).then((res) => {
            if (res.status === 200 && res.data !== null) {
                setCookie("image", res.data);
                window.location.reload();
            } else {
                alert("이미지 변경에 실패하였습니다. 다시 시도해주세요.");
            }
        }).catch((err) => {
            console.log(err);
        });
    }





    // password focusOut event
    function pwFocusOut() {
        if (inputPw.length < 8) {
            pwInfoText.current.innerText = "패스워드는 8자리 이상이어야 합니다.";
        } else if (inputPw.replace(/[!-*, @]/gi, "").length >= inputPw.length) {
            pwInfoText.current.innerText = "패스워드는 영문, 숫자, 특수문자를 반드시 포함해야 합니다.";
        } else if (inputPw.replace(/[a-z]/gi, "").length >= inputPw.length) {
            pwInfoText.current.innerText = "패스워드는 영문, 숫자, 특수문자를 반드시 포함해야 합니다.";
        } else if (inputPw.replace(/[0-9]/gi, "").length >= inputPw.length) {
            pwInfoText.current.innerText = "패스워드는 영문, 숫자, 특수문자를 반드시 포함해야 합니다.";
        } else {
            pwInfoText.current.innerText = "";
        }
    }

    // password check change event
    function pwCheckChange(e) {
        setInputCheckP(e.target.value);

        if (e.target.value === inputPw) {
            pwCheckImg.current.style.background = "url(./images/icons/ok_blue.png) center/90% no-repeat";
            setChPwOk(true);
        } else {
            pwCheckImg.current.style.background = "url(./images/icons/nope_blue.png) center/90% no-repeat";
        }
    }

    // 변경 요청
    function changeReq() {
        if (chPwOk) {
            toSpringWithToken({
                method: "put",
                url: "/ch-pw",
                data: {
                    "userId": getCookie("id"),
                    "password": inputCheckP
                }
            }).then((res) => {
                console.log(res.data);
                if (res.status === 200 && res.data) {
                    alert("수정이 완료되었습니다.");
                    ScrollTop();
                    window.location.reload();
                } else {
                    alert("다시 시도해주세요.");
                }
            }).catch((err) => {
                console.log(err);
            })
        } else {
            alert("확인 후 다시 시도해주세요.");
        }
    }




    return (
        <My.MyPageContainer>
            <My.MyPageTitle>My Page</My.MyPageTitle>

            {/* 유저 이미지 */}
            <My.MyPageImage style={{ background: `url(${getCookie("image")}) center/cover` }} />



            {/* 유저 이미지 변경 */}
            <My.MyImageChangeBox>
                <My.MyImageSeletor>
                    사진 선택
                    <input type="file" style={{ display: "none" }} ref={fileInput} onChange={ImagePreview} />
                </My.MyImageSeletor>

                <My.MyImageChanger onClick={changeImage}>변경하기</My.MyImageChanger>
            </My.MyImageChangeBox>



            {/* 이미지 미리보기 */}
            <My.ImagePreViewContainer ref={previewContainer}>
                <My.ImagePreviewTitle>미리보기</My.ImagePreviewTitle>
                <My.ImagePreview ref={previewImage} />
            </My.ImagePreViewContainer>



            {/* 마이페이지 메뉴 */}
            <My.MyPageNav>
                <My.MyPageNavBtn style={navStatus === 1 ? selectNav : {}} onClick={() => setNavStatus(1)}>
                    나의 스토리
                </My.MyPageNavBtn>

                <My.MyPageNavBtn style={navStatus === 2 ? selectNav : {}} onClick={() => setNavStatus(2)}>
                    내 정보
                </My.MyPageNavBtn>
            </My.MyPageNav>



            {/* 나의 스토리 */}
            <My.MyStoryContainer style={navStatus === 1 ? { display: "flex" } : { display: "none" }}>
                <My.MyStoryBox></My.MyStoryBox>
                <My.MyStoryBox></My.MyStoryBox>
                <My.MyStoryBox></My.MyStoryBox>
                <My.MyStoryBox></My.MyStoryBox>
                <My.MyStoryBox></My.MyStoryBox>
                <My.MyStoryBox></My.MyStoryBox>
                <My.MyStoryBox></My.MyStoryBox>
            </My.MyStoryContainer>



            {/* 내 정보 */}
            <My.MyInfoContainer style={navStatus === 2 ? { display: "flex" } : { display: "none" }}>
                <My.MyInfoBox>
                    <My.MyInfoInput type="text" value={myinfo.id} readOnly />
                    <My.MyInfoValue>아이디</My.MyInfoValue>
                </My.MyInfoBox>

                <My.MyInfoBox>
                    <My.MyInfoInput type="text" value={myinfo.name} readOnly />
                    <My.MyInfoValue>이름</My.MyInfoValue>
                </My.MyInfoBox>

                <My.MyInfoBox>
                    <My.MyInfoInput type="password" value={inputPw}
                        onBlur={pwFocusOut} onChange={(e) => setInputPw(e.target.value)} />
                    <My.MyInfoValue>패스워드</My.MyInfoValue>
                    <My.PwInfoText ref={pwInfoText}></My.PwInfoText>
                </My.MyInfoBox>

                <My.MyInfoBox>
                    <My.MyInfoInput type="password" value={inputCheckP}
                        onChange={(e) => pwCheckChange(e)} />
                    <My.MyInfoValue>패스워드 확인</My.MyInfoValue>
                    <My.PwCheckImg ref={pwCheckImg} />
                </My.MyInfoBox>

                <My.MyInfoBox>
                    <My.MyInfoInput type="text" value={myinfo.phone} readOnly />
                    <My.MyInfoValue>휴대폰 번호</My.MyInfoValue>
                </My.MyInfoBox>

                <My.MyInfoBox>
                    <My.MyInfoInput type="text" value={myinfo.email} readOnly />
                    <My.MyInfoValue>이메일</My.MyInfoValue>
                </My.MyInfoBox>

                <My.MyInfoChangeBtn onClick={changeReq}>수정하기</My.MyInfoChangeBtn>
            </My.MyInfoContainer>
        </My.MyPageContainer>
    );

}