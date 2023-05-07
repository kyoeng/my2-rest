import { useState, useEffect, useRef } from "react";
import { getCookie, setCookie } from "../components/commons/Cookie";
import * as My from "../components/styles/MyPageStyle";
import { toSpringBoot, toSpringWithToken } from "../components/commons/Axioses";



export default function MyPage() {
    const [navStatus, setNavStatus] = useState(1);
    const [myinfo, setMyinfo] = useState(<div className="loaderContainerFix"><div className="loader"></div></div>);

    const fileInput = useRef();         // 파일 input 태그
    const previewContainer = useRef();  // 미리보기 컨테이너
    const previewImage = useRef();      // 미리보기 이미지 태그

    // select nav style
    const selectNav = {
        border: "2px solid #87CEFA",
        backgroundColor: "white",
        color: "#87CEFA"
    }

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
                    setMyinfo(
                        <>
                            <My.MyInfoBox>
                                <My.MyInfoInput type="text" value={res.data.userId} readOnly />
                                <My.MyInfoValue>아이디</My.MyInfoValue>
                            </My.MyInfoBox>

                            <My.MyInfoBox>
                                <My.MyInfoInput type="text" value={res.data.userName} readOnly />
                                <My.MyInfoValue>이름</My.MyInfoValue>
                            </My.MyInfoBox>

                            <My.MyInfoBox>
                                <My.MyInfoInput type="password" />
                                <My.MyInfoValue>패스워드</My.MyInfoValue>
                            </My.MyInfoBox>

                            <My.MyInfoBox>
                                <My.MyInfoInput type="password" />
                                <My.MyInfoValue>패스워드 확인</My.MyInfoValue>
                            </My.MyInfoBox>

                            <My.MyInfoBox>
                                <My.MyInfoInput type="text" value={res.data.userPhone} readOnly />
                                <My.MyInfoValue>휴대폰 번호</My.MyInfoValue>
                            </My.MyInfoBox>

                            <My.MyInfoBox>
                                <My.MyInfoInput type="text" value={res.data.userEmail} readOnly />
                                <My.MyInfoValue>이메일</My.MyInfoValue>
                            </My.MyInfoBox>

                            <My.MyInfoChangeBtn>내 정보 수정</My.MyInfoChangeBtn>
                        </>
                    );
                } else {
                    setNavStatus(1);
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }, [navStatus]);



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

                <My.MyPageNavBtn style={navStatus === 3 ? selectNav : {}} onClick={() => setNavStatus(3)}>
                    임시
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
                {myinfo}
            </My.MyInfoContainer>
        </My.MyPageContainer>
    );

}