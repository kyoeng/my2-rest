import { useLayoutEffect, useRef, useState } from "react";
import * as Bd from "../components/styles/BoardStyle";
import { getCookie } from "../components/commons/Cookie";
import { toSpringBoot } from "../components/commons/Axioses";
import { useNavigate } from "react-router-dom";
import ScrollTop from "../components/commons/ScrollTop";
import "../components/styles/Loader.css";




export default function Board() {
    const [boardType, setBoardType] = useState(false);      // 공지사항인지 자유게시판인지 구분하는 변수
    const [isAdmin, setIsAdmin] = useState(false);          // 관리자가 로그인했는지를 위한 변수

    const [PostBoard, setPostBoard] = useState([]);         // 공지사항 데이터를 보여줄 배열
    const [FreeBoard, setFreeBoard] = useState([]);         // 자유게시판 데이터를 보여줄 배열

    const [selectValue, setSelectValue] = useState("t");     // 검색 select 태그 value (type)
    const [inputValue, setInputValue] = useState("");       // 검색 input 태그 value  (keyword)

    const [paging, setPaging] = useState({});               // 페이징을 위한 객체
    const [type, setType] = useState(null);                 // 검색 타입
    const [keyword, setKeyword] = useState(null);           // 검색 키워드

    const postValues = useRef([]);                          // 공지사항 내용 태그를 위한 배열
    const loading = useRef();

    const navi = useNavigate();


    // 공지사항 버튼 이벤트트
    function postClick(e, num) {
        let content = postValues.current[num];

        if (content.style.display === "block") {
            content.style.display = "none";
            e.target.textContent = "펼치기";
        } else {
            content.style.display = "block";
            e.target.textContent = "접기";
        }
    }


    // 로그인 대상자가 관리자인지 확인하고 해당하는 데이터 가져오기
    useLayoutEffect(() => {
        if (getCookie("id") === "admin") {
            setIsAdmin(true);
        }

        loading.current.style.display = "block";

        // 공지사항
        if (!boardType) {
            toSpringBoot({
                method: "get",
                url: "/get-post"
            }).then((res) => {
                if (res.status === 200 && res.data !== null) {
                    setPostBoard(res.data.post);
                    setPaging(res.data.pageMaker);
                } else {
                    alert("게시판을 불러오지 못했습니다.");
                    navi("/", { replace: true });
                }
            }).catch((err) => {
                alert("게시판을 불러오지 못했습니다.");
                console.log(err);
            });
        } else {
            toSpringBoot({
                method: "get",
                url: "/get-free"
            }).then((res) => {
                if (res.status === 200 && res.data !== null) {
                    setFreeBoard(res.data.free);
                    setPaging(res.data.pageMaker);
                } else {
                    alert("게시판을 불러오지 못했습니다.");
                    navi("/", { replace: true });
                }
            }).catch((err) => {
                console.log(err);
            });
        }


        loading.current.style.display = "none";
    }, [boardType, navi]);




    // 검색
    function letsSearch() {
        console.log("search");
        toSpringBoot({
            method: "get",
            url: `/get-free?keyword=${inputValue}&type=${selectValue}`
        }).then((res) => {
            if (res.status === 200 && res.data !== null) {
                console.log(res.data);
                setFreeBoard(res.data.free);
                setPaging(res.data.pageMaker);
                setKeyword(inputValue);
                setType(selectValue);
            } else {
                alert("게시판을 불러오지 못했습니다.");
                navi("/", { replace: true });
            }
        }).catch((err) => {
            console.log(err);
        });
    }





    // 현재 페이징 스타일
    const selectStyle = {
        cursor: "default",
        backgroundColor: "#87CEFA",
        color: "white"
    };

    // prev, next nonStyle
    const nopeBtn = {
        cursor: "default",
        opacity: "0.8"
    };

    // 페이징 클릭 시 url 만들기
    function createUrl(key, type, num) {
        if (boardType) {
            if (key !== null && type !== null) {
                return `free?keyword=${key}&type=${type}?currentPage=${num}`;
            } else {
                return `free?currentPage=${num}`;
            }
        } else {
            return `post?currentPage=${num}`;
        }
    }

    // 페이징 클릭 시 axios 요청
    function commonPagingReq(url) {
        toSpringBoot({
            method: "get",
            url: `get-${url}`
        }).then((res) => {
            if (res.status === 200 && res.data !== null) {
                if (boardType) {
                    setFreeBoard(res.data.free);
                } else {
                    setPostBoard(res.data.post);
                }
                setPaging(res.data.pageMaker);
            } else {
                alert("게시판을 불러오지 못했습니다.");
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    // << btn
    function goFirst(k, t) {
        let url = createUrl(k, t, 1);
        commonPagingReq(url);
        ScrollTop();
    }

    // < btn
    function goBefore(k, t) {
        let url = createUrl(k, t, paging.startPageNum - 1)
        commonPagingReq(url);
        ScrollTop();
    }

    // >> btn
    function goLast(k, t) {
        let url = createUrl(k, t, paging.lastPageNum);
        commonPagingReq(url);
        ScrollTop();
    }

    // > btn
    function goNext(k, t) {
        let url = createUrl(k, t, paging.endPageNum + 1);
        commonPagingReq(url);
        ScrollTop();
    }

    // paging btn
    function goPaging(k, t, i) {
        let url = createUrl(k, t, i);
        commonPagingReq(url);
        ScrollTop();
    }



    // 페이징 만들기
    let pagingView = [];
    for (let i = paging.startPageNum; i <= paging.endPageNum; i++) {
        pagingView.push(
            <Bd.PagingBtn key={`paging_${i}`} disabled={paging.criteria.currentPage === i ? true : false}
                style={paging.criteria.currentPage === i ? selectStyle : {}} onClick={() => goPaging(keyword, type, i)}>
                {i}
            </Bd.PagingBtn>
        );
    }





    return (
        <>
            <Bd.BoardContainer>
                <Bd.BoardTitle>Board</Bd.BoardTitle>

                <Bd.BoardTypeContainer>
                    <Bd.BoardTypeBtn onClick={() => setBoardType(false)}
                        style={boardType ? {} : { backgroundColor: "#87CEFA", color: "white" }}>
                        공지사항
                    </Bd.BoardTypeBtn>

                    <Bd.BoardTypeBtn onClick={() => setBoardType(true)}
                        style={boardType ? { backgroundColor: "#87CEFA", color: "white" } : {}}>
                        자유게시판
                    </Bd.BoardTypeBtn>
                </Bd.BoardTypeContainer>



                {/* 공지사항 부분 */}
                <Bd.PostContainer style={boardType ? { display: "none" } : { display: "block" }}>
                    <Bd.PostRegBtn style={isAdmin ? { display: "block" } : { display: "none" }}>등록하기</Bd.PostRegBtn>

                    <Bd.PostInfoBar>
                        <Bd.PostInfoTitle>제목</Bd.PostInfoTitle>
                        <Bd.PostInfoReg>등록일</Bd.PostInfoReg>
                        <Bd.PostInfoBtn>보기</Bd.PostInfoBtn>
                    </Bd.PostInfoBar>

                    {PostBoard.map((v, i) => {
                        return (
                            <Bd.PostBox key={`post_${i}`}>
                                <Bd.PostTitle>{v.title}</Bd.PostTitle>
                                <Bd.PostReg>{v.regDate}</Bd.PostReg>
                                <Bd.PostBtn onClick={(e) => postClick(e, i)}>펼치기</Bd.PostBtn>
                                <Bd.PostValue ref={(e) => postValues.current[i] = e}>
                                    {v.content}
                                </Bd.PostValue>
                            </Bd.PostBox>
                        );
                    })}
                </Bd.PostContainer>



                {/* 자유게시판 부분 */}
                <Bd.FreeContainer style={boardType ? { display: "block" } : { display: "none" }}>
                    <Bd.FreeSearchBox>
                        <Bd.FreeSearchType value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                            <option value="t">제목</option>
                            <option value="w">작성자</option>
                        </Bd.FreeSearchType>

                        <Bd.FreeSearchInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

                        <Bd.FreeSearchBtn onClick={letsSearch}>검색</Bd.FreeSearchBtn>
                    </Bd.FreeSearchBox>

                    <Bd.FreeInfoBar>
                        <Bd.FreeInfoSeq>글번호</Bd.FreeInfoSeq>
                        <Bd.FreeInfoTitle>제목</Bd.FreeInfoTitle>
                        <Bd.FreeInfoId>작성자</Bd.FreeInfoId>
                        <Bd.FreeInfoReg>등록일</Bd.FreeInfoReg>
                    </Bd.FreeInfoBar>

                    {FreeBoard.map((v, i) => {
                        return (
                            <Bd.FreeBox key={`free_${i}`}>
                                <Bd.FreeSeq>{v.freeSeq}</Bd.FreeSeq>
                                <Bd.FreeTitle>{v.title}</Bd.FreeTitle>
                                <Bd.FreeId>{v.userId}</Bd.FreeId>
                                <Bd.FreeReg>{v.regDate}</Bd.FreeReg>
                                <Bd.FreeLink to={`/board-detail/${v.freeSeq}`} onClick={ScrollTop} />
                            </Bd.FreeBox>
                        );
                    })}
                </Bd.FreeContainer>



                {/* 페이징 부분 */}
                <Bd.PagingBox>
                    {paging.prev ? <Bd.PagingBtn onClick={() => goFirst(keyword, type)}>&lt;&lt;</Bd.PagingBtn> : <Bd.PagingBtn disabled style={nopeBtn}>&lt;&lt;</Bd.PagingBtn>}
                    {paging.prev ? <Bd.PagingBtn onClick={() => goBefore(keyword, type)}>&lt;</Bd.PagingBtn> : <Bd.PagingBtn disabled style={nopeBtn}>&lt;</Bd.PagingBtn>}
                    {pagingView}
                    {paging.next ? <Bd.PagingBtn onClick={() => goNext(keyword, type)}>&gt;</Bd.PagingBtn> : <Bd.PagingBtn disabled style={nopeBtn}>&gt;</Bd.PagingBtn>}
                    {paging.next ? <Bd.PagingBtn onClick={() => goLast(keyword, type)}>&gt;&gt;</Bd.PagingBtn> : <Bd.PagingBtn disabled style={nopeBtn}>&gt;&gt;</Bd.PagingBtn>}
                </Bd.PagingBox>

                <div className="loaderContainerFix" ref={loading}>
                    <div className="loader"></div>
                </div>
            </Bd.BoardContainer>
        </>
    );

}