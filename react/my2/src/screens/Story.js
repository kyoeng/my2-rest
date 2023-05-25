import { useEffect, useRef, useState } from "react";
import * as St from "../components/styles/StoryStyle";
import "../components/styles/Loader.css";
import { toSpringBoot } from "../components/commons/Axioses";
import ScrollTop from "../components/commons/ScrollTop";
import { getCookie } from "../components/commons/Cookie";






const Story = () => {
    const [storys, setStorys] = useState([]);       // 스토리를 저장할 변수 (view 용도)
    const [login, setLogin] = useState(false);      // 로그인 확인용

    const viewSelect = useRef();    // 뷰 결정 select 태그 참조
    const loading = useRef([]);     // 로딩 화면 참조
    const moreView = useRef();      // 더 보기 버튼 참조

    const page = useRef(0);     // 페이지 번호

    // 최초 렌더링 시 한번만 실행
    useEffect(() => {
        let tk = getCookie("token");
        if (tk !== undefined && tk !== null) setLogin(true);

        toSpringBoot({
            url: "/get-storys",
            method: "get"
        }).then((res) => {
            if (res.status === 200) {
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

                            <St.StoryLink to={``} />
                        </St.StoryBox>
                    );
                }

                page.current++;
                setStorys(views);

                loading.current[0].style.display = "none";
            } else {
                console.log(res.status);
                console.log(res.data);
            }
        }).catch((err) => {
            console.log(err);
        });
    }, []);


    // 뷰 결정짓는 select 태그 change 함수
    function ChangeView() {
        console.log(viewSelect.current.value);
    }


    return (
        <St.StoryContainer>
            <St.StoryTitle>S T O R Y</St.StoryTitle>
            <St.StoryRegBtn to={login ? "/regi-story" : "/login"} onClick={ScrollTop}>스토리 작성</St.StoryRegBtn>
            <St.StoryTypeBox ref={viewSelect} onChange={ChangeView}>
                <option value="">최신 순</option>
                <option value="l">좋아요 순</option>
                <option value="v">조회수 순</option>
            </St.StoryTypeBox>

            <St.StoryContentContainer>
                <div className="storyLoader" style={{ display: "block", height: "500px" }} ref={(e) => loading.current[0] = e}>
                    <div className="loader"></div>
                </div>

                {storys}
            </St.StoryContentContainer>

            <St.StoryMoreBtn ref={moreView}>더 보기</St.StoryMoreBtn>
        </St.StoryContainer>
    );
}




export default Story;