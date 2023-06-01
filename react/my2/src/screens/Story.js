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

    const page = useRef(1);     // 페이지 번호


    


    // 스토리에 대한 뷰를 만들어주는 함수
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



    // 최초 렌더링 시 한번만 실행
    useEffect(() => {
        let tk = getCookie("token");
        if (tk !== undefined && tk !== null) setLogin(true);

        toSpringBoot({
            url: "/get-storys",
            method: "get"
        }).then((res) => {
            if (res.status === 200) {
                const views = viewFactory(res);
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


    // 더 보기 요청 함수
    function moreViewReq() {
        moreView.current.style.display = "none";
        loading.current[1].style.display = "block";

        toSpringBoot({
            method: "get",
            url: "/get-storys",
            params: {
                "currentPage": page.current,
                "type": viewSelect.current.value
            }
        }).then((res) => {
            if (res.status === 200) {
                const views = viewFactory(res);

                if (res.data.pageMaker.endPageNum !== page.current) {
                    page.current++;
                    moreView.current.style.display = "block";
                }

                loading.current[1].style.display = "none";

                setStorys([
                    ...storys, views
                ]);
            } else {
                console.log(res);
            }
        }).catch((err) => {
            console.log(err);
        });
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

            <div className="storyLoader" style={{ display: "none", height: "100px" }} ref={(e) => loading.current[1] = e}>
                <div className="loader"></div>
            </div>

            <St.StoryMoreBtn ref={moreView} onClick={moreViewReq}>더 보기</St.StoryMoreBtn>
        </St.StoryContainer>
    );
}




export default Story;