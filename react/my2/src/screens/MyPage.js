import { useState, useEffect, useRef } from "react";
import { getCookie, setCookie } from "../components/commons/Cookie";
import * as My from "../components/styles/MyPageStyle";
import { toSpringWithToken } from "../components/commons/Axioses";
import ScrollTop from './../components/commons/ScrollTop';
import * as St from "../components/styles/StoryStyle";



export default function MyPage() {
    const [navStatus, setNavStatus] = useState(1);      // 마이페이지 메뉴를 위한 변수

    const [storys, setStorys] = useState([]);               // 나의 스토리의 view를 저장할 변수
    const [inputPw, setInputPw] = useState("");             // 비밀번호
    const [inputCheckP, setInputCheckP] = useState("");     // 비밀번호 확인

    // 내정보를 위한 객체
    const [myinfo, setMyinfo] = useState({
        "id": "",
        "name": "",
        "phone": "",
        "email": ""
    });

    const loading = useRef([]);         // 나의 스토리 로딩 화면들
    const page = useRef(1);             // 나의 스토리 페이지 번호
    const moreView = useRef();          // 더 보기 버튼 참조

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


    // story view를 만드는 함수
    function viewFactory(res) {
        let views = [];

        for (let i = 0; i < res.data.result.length; i++) {
            let area = res.data.result[i].storyArea.replace(/ /gi, '#');                // 지역앞에 #붙이기
            let extension = res.data.result[i].imgPath.split("/")[3].split(".")[1];     // 확장자 구하기

            views.push(
                <St.StoryBox key={`st_${i}`}
                    style={extension === "jpg" || extension === "png" ?
                        { background: `url(${res.data.result[i].imgPath}) center/100% no-repeat` } : { display: "flex", alignItems: "center" }}>

                    {extension === "jpg" || extension === "png" ?
                        '' : <St.StoryVideo autoPlay muted loop><source src={res.data.result[i].imgPath} /></St.StoryVideo>}

                    <St.StoryValue>
                        <St.StoryTextBox>
                            <St.StoryText>ID : {res.data.result[i].userId}</St.StoryText>
                            <St.StoryText>#{area}</St.StoryText>
                        </St.StoryTextBox>

                        <St.StoryLikeView>
                            Like : {res.data.result[i].storyLike}
                        </St.StoryLikeView>
                        <St.StoryLikeView style={{ top: "40px" }}>
                            view : {res.data.result[i].storyView}
                        </St.StoryLikeView>
                    </St.StoryValue>

                    <St.StoryLink to={`/story-detail/${res.data.result[i].storySeq}`} onClick={ScrollTop} />
                </St.StoryBox>
            );
        }

        return views;
    }


    // Spring 서버로 요청 ==============
    useEffect(() => {
        // 나의 스토리에 대한 요청 ===
        if (navStatus === 1) {
            toSpringWithToken({
                url: "/get-mystorys",
                method: "get",
                params: {
                    "userId": getCookie("id")
                }
            }).then((res) => {
                if (res.status === 200 && res.data !== null) {
                    const views = viewFactory(res);

                    loading.current[0].style.display = "none";
                    setStorys(views);

                    if (page.current < res.data.pageMaker.endPageNum) {
                        moreView.current.style.display = "block";
                    }
                } else {
                    console.log(res);
                }
            }).catch((err) => {
                console.log(err);
            })
            // 내 정보에 대한 요청 ===
        } else if (navStatus === 2) {
            toSpringWithToken({
                url: "/get-info",
                method: "get",
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
                    console.log(res);
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
            <St.StoryContentContainer style={navStatus === 1 ? { display: "flex" } : { display: "none" }}>
                <div className="storyLoader" style={{ display: "block", height: "500px" }} ref={(e) => loading.current[0] = e}>
                    <div className="loader"></div>
                </div>

                {storys}
            </St.StoryContentContainer>
            <St.StoryMoreBtn ref={moreView} style={navStatus === 1 ? { display: "none" } : { display: "none" }}>
                더 보기
            </St.StoryMoreBtn>



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