import { useState, useEffect } from "react";
import { getCookie } from "../components/commons/Cookie";
import * as My from "../components/styles/MyPageStyle";
import { toSpringBoot } from "../components/commons/Axioses";



export default function MyPage() {
    const [navStatus, setNavStatus] = useState(1);

    const [myinfo, setMyinfo] = useState(<div className="loaderContainerFix"><div className="loader"></div></div>);

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


    return (
        <My.MyPageContainer>
            <My.MyPageTitle>My Page</My.MyPageTitle>

            <My.MyPageImage style={{ background: `url(${getCookie("image")}) center/cover` }} />

            <My.MyImageChangeBox>
                <My.MyImageSeletor>
                    사진 선택
                    <input type="file" style={{ display: "none" }} />
                </My.MyImageSeletor>

                <My.MyImageChanger>변경하기</My.MyImageChanger>
            </My.MyImageChangeBox>

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
                {/* <My.MyInfoBox>
                    <My.MyInfoInput type="text" readOnly />
                    <My.MyInfoValue>아이디</My.MyInfoValue>
                </My.MyInfoBox>

                <My.MyInfoBox>
                    <My.MyInfoInput type="password" readOnly />
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
                    <My.MyInfoInput type="password" readOnly />
                    <My.MyInfoValue>휴대폰 번호</My.MyInfoValue>
                </My.MyInfoBox>

                <My.MyInfoBox>
                    <My.MyInfoInput type="password" readOnly />
                    <My.MyInfoValue>이메일</My.MyInfoValue>
                </My.MyInfoBox>

                <My.MyInfoChangeBtn>내 정보 수정</My.MyInfoChangeBtn> */}
            </My.MyInfoContainer>
        </My.MyPageContainer>
    );

}