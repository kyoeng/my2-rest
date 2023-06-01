import { useNavigate, useParams } from "react-router-dom";
import * as SD from "../components/styles/StoryDetailStyle";
import { useEffect, useRef, useState } from "react";
import { toSpringBoot, toSpringWithToken } from "../components/commons/Axioses";
import { getCookie, removeCookie } from "../components/commons/Cookie";
import ScrollTop from "../components/commons/ScrollTop";





export default function StoryDetail() {
    // 쿼리스트링 부분 가져오기(StorySeq)
    const seq = useParams().seq;

    // 스토리 정보를 담을 객체 변수 선언
    const [data, setData] = useState({
        "userId": "",
        "storyTitle": "",
        "storyArea": "",
        "storyContent": "",
        "regDate": "",
        "storyView": "",
        "storyLike": "",
        "imgs": []
    });

    // 댓글 데이터를 위한 변수
    const [cmts, setCmts] = useState([]);

    // 슬라이드를 위한 태그 참조
    const imgs = useRef([]);

    // 슬라이드를 위한 번호 변수
    const slideNum = useRef(0);

    // 슬라이드 버튼 참조
    const lBtn = useRef(), rBtn = useRef();

    // 댓글 input 박스
    const [cmtInput, setCmtInput] = useState("");

    // url 변경을 위한 변수
    const navi = useNavigate();

    // 슬라이드 Lock을 위한 시간 변수
    let bfTime = 0;



    // 데이터 요청을 위한 함수
    function stReq(seq) {
        toSpringBoot({
            url: "/get-sdetail",
            method: "get",
            params: { seq }
        }).then((res) => {
            if (res.status === 200 && res.data !== null) {
                const imgs = [];
                for (let i = 0; i < res.data.imgs.length; i++) {
                    imgs.push(res.data.imgs[i]);
                }

                setData({
                    "userId": res.data.st.userId,
                    "storyTitle": res.data.st.storyTitle,
                    "storyArea": res.data.st.storyArea,
                    "storyContent": res.data.st.storyContent,
                    "regDate": res.data.st.regDate,
                    "storyView": res.data.st.storyView,
                    "storyLike": res.data.st.storyLike,
                    imgs
                });

                setCmts(res.data.cmts);
            } else {
                console.log(res);
            }
        }).catch((err) => {
            console.log(err);
        });
    }



    // 첫 렌더링 시 해당 데이터 가져오기
    useEffect(() => {
        stReq(seq);
    }, [seq]);


    // 슬라이드 동작 중 Lock에 대한 함수
    function lock() {
        let nowTime = new Date();

        if (nowTime - bfTime > 1100) {
            bfTime = nowTime;
            return true;
        }
    }


    // 슬라이드 버튼 클릭 이벤트
    function slideImg(val) {

        if (lock()) {
            let moving;     // 이동할 위치 변수

            // 슬라이드 지정
            if (val > 0) {
                moving = "-100%";
            } else {
                moving = "100%";
            }

            imgs.current[slideNum.current].style.left = moving;
            slideNum.current += val;
            imgs.current[slideNum.current].style.left = "0";

            // 버튼 스타일 지정
            if (slideNum.current === 0) {
                lBtn.current.style.display = "none";
                rBtn.current.style.display = "block";
            } else if (slideNum.current === data.imgs.length - 1) {
                rBtn.current.style.display = "none";
                lBtn.current.style.display = "block";
            } else {
                lBtn.current.style.display = "block";
                rBtn.current.style.display = "block";
            }
        }
    }


    // 댓글 등록 버튼
    function regCmt() {
        if (getCookie("token") !== undefined && getCookie("token") !== null) {
            toSpringWithToken({
                url: "/reg-stcmt",
                method: "post",
                data: {
                    storySeq: seq,
                    userId: getCookie("id"),
                    stcmtContent: cmtInput
                }
            }).then((res) => {
                if (res.status === 200 && res.data) {
                    alert("댓글 등록이 완료되었습니다.");
                    stReq(seq);
                } else {
                    console.log(res);
                }
            }).catch((err) => {
                if (err.code === "ERR_NETWORK") {
                    alert("로그인 후 이용해주세요.");
                    ScrollTop();
                    removeCookie("token");
                    removeCookie("id");
                    removeCookie("image");
                    navi("/login", { replace: true });
                } else {
                    console.log(err);
                }
            });
        } else {
            alert("로그인 후 이용해주세요.");
            navi("/login", { replace: true });
            ScrollTop();
        }
    }


    return (
        <SD.SdContainer>
            <SD.SdTitle>
                Story
                <SD.SdTitleInfo>{data.userId}님의 스토리</SD.SdTitleInfo>
            </SD.SdTitle>

            <SD.StoryTitleTag>제목 : {data.storyTitle}</SD.StoryTitleTag>
            <SD.StoryAreaTag>지역 : #{data.storyArea.replaceAll(" ", "#")}</SD.StoryAreaTag>

            <SD.SdImgContainer>
                <SD.SlideBtn onClick={() => slideImg(-1)} ref={lBtn}
                    style={{ background: "url(/images/icons/left_btn.png) center/100% no-repeat", left: "-80px", display: "none" }} />

                <SD.SlideBtn onClick={() => slideImg(1)} ref={rBtn}
                    style={{ background: "url(/images/icons/right_btn.png) center/100% no-repeat", right: "-80px" }} />

                <SD.SlideBox>
                    {data.imgs.map((v, i) => {
                        let imgName = v.split("storyImages/")[1];   // 이미지 파일명 추출
                        let frontName = imgName.split(".")[0];      // 확장자를 제외한 파일명
                        let backName = imgName.split(".")[1];       // 확장자

                        return (
                            <SD.SlideImgsBox key={`img_${i}`} style={frontName.endsWith("-1") ? { left: "0" } : {}} ref={(e) => imgs.current[i] = e}>
                                {backName === "jpg" || backName === "png" ?
                                    <SD.SlideImg style={{ background: `url(${v.substr(1)}) center/100% no-repeat` }} /> :
                                    <SD.SlideVideo autoPlay muted loop><source src={v.substr(1)} /></SD.SlideVideo>}
                            </SD.SlideImgsBox>
                        );
                    })}
                </SD.SlideBox>
            </SD.SdImgContainer>

            <SD.SdStoryContentBox>
                <SD.SdStoryContentTitle>내용</SD.SdStoryContentTitle>
                {data.storyContent}
            </SD.SdStoryContentBox>

            <SD.CmtContainer>
                <SD.CmtTitle>댓글</SD.CmtTitle>

                {cmts.map((v, i) => {
                    return (
                        <SD.CmtContent key={`cmt_${i}`}>
                            {v.userId} : {v.stcmtContent}
                        </SD.CmtContent>
                    );
                })}

                <SD.CmtRegTitle>
                    <SD.CmtRegTitleText>댓글 등록</SD.CmtRegTitleText>
                </SD.CmtRegTitle>

                <SD.CmtRegBox>
                    <SD.CmtInput maxLength="40" onChange={(e) => setCmtInput(e.target.value)} />
                    <SD.CmtRegBtn onClick={regCmt}>등록</SD.CmtRegBtn>
                </SD.CmtRegBox>
            </SD.CmtContainer>
        </SD.SdContainer>
    );

}