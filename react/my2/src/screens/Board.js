import { useLayoutEffect, useRef, useState } from "react";
import * as Bd from "../components/styles/BoardStyle";
import { getCookie, removeCookie } from "../components/commons/Cookie";
import { forTokenCheckReq, toSpringBoot, toSpringWithToken } from "../components/commons/Axioses";
import { useNavigate } from "react-router-dom";
import ScrollTop from "../components/commons/ScrollTop";
import "../components/styles/Loader.css";




export default function Board() {
    const [boardType, setBoardType] = useState(false);      // 공지사항인지 자유게시판인지 구분하는 변수

    const [isAdmin, setIsAdmin] = useState(false);          // 관리자가 로그인했는지를 위한 변수
    const [PostBoard, setPostBoard] = useState([]);         // 공지사항 데이터를 보여줄 배열

    const [FreeBoard, setFreeBoard] = useState([]);         // 자유게시판 데이터를 보여줄 배열

    const [postRegiOnOff, setPostRegiOnOff] = useState(false);      // 공지사항 등록 화면의 유무를 결정할 변수
    const [freeRegiOnOff, setFreeRegiOnOff] = useState(false);      // 자유게시글 등록 화면의 유무를 결정할 변수

    const [selectValue, setSelectValue] = useState("t");    // 검색 select 태그 value (type)
    const [inputValue, setInputValue] = useState("");       // 검색 input 태그 value  (keyword)

    const [paging, setPaging] = useState({});               // 페이징을 위한 객체
    const [type, setType] = useState(null);                 // 검색 타입
    const [keyword, setKeyword] = useState(null);           // 검색 키워드

    const postValues = useRef([]);                          // 공지사항 내용 태그를 위한 배열
    const loading = useRef();                               // 로딩 화면

    // 게시글 등록을 위한 input 내용 변수
    const [postTitleInput, setPostTitleInput] = useState("");
    const [postContentInput, setPostContentInput] = useState("");
    const [freeTitleInput, setFreeTitleInput] = useState("");
    const [freeContentInput, setFreeContentInput] = useState("");

    const navi = useNavigate();




    // 공지사항 버튼 이벤트
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


    // 렌더링 시 유저 확인 및 데이터 가져오기
    useLayoutEffect(() => {
        if (getCookie("id") === "admin") {
            setIsAdmin(true);
        }

        loading.current.style.display = "block";

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



    // 글 등록 열기 클릭 이벤트
    function clickRegi() {
        forTokenCheckReq().then((res) => {
            if (res.status === 200 && res.data) {
                if (!boardType) {
                    setPostRegiOnOff(true);
                } else {
                    setFreeRegiOnOff(true);
                }
            } else {
                alert("로그인 후 이용하세요.");
                ScrollTop();
                if (getCookie("token") !== null || getCookie("token") !== undefined) {
                    removeCookie("token");
                    removeCookie("id");
                    removeCookie("image");
                }
                navi("/login", { replace: true });
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    // 게시글 등록 요청
    function reqRegiBoard(url, data) {
        toSpringWithToken({
            method: "post",
            url: url,
            data: data
        }).then((res) => {
            if (res.status === 200 && res.data) {
                alert("등록이 완료되었습니다.");
                window.location.reload();
            } else {
                alert("다시 시도해주세요.");
            }
        }).catch((err) => {
            console.log(err);
        });
    }



    // 자유게시글 등록
    function RegiBoard() {
        // 요청 url
        let url;
        // 함께 보낼 데이터 
        let data = {
            "title": "",
            "content": ""
        };

        if (!boardType) {
            // 공지사항 등록
            url = "/regi-post";
            data.title = postTitleInput;
            data.content = postContentInput;
        } else {
            // 자유게시판 등록
            url = "/regi-free";
            data.title = freeTitleInput;
            data.content = freeContentInput;
            data.userId = getCookie("id");
        }

        if (data.title !== "" && data.content !== "") {
            reqRegiBoard(url, data);
        } else {
            alert("입력사항을 확인해주세요.");
        }
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
                    <Bd.PostRegBtn onClick={clickRegi} style={isAdmin ? { display: "block" } : { display: "none" }}>등록하기</Bd.PostRegBtn>

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


                    {/* 공지사항 등록 */}
                    <Bd.RegiContainer style={postRegiOnOff ? { display: "block" } : { display: "none" }}>
                        <Bd.RegiBox>
                            <Bd.RegiTitle>공지사항 등록하기</Bd.RegiTitle>

                            <Bd.InputContainer style={{ height: "50px" }} >
                                <Bd.Input value={postTitleInput} onChange={(e) => setPostTitleInput(e.target.value)}
                                    placeholder="게시글의 제목을 입력해주세요." />
                                <Bd.ValueInfo>제목</Bd.ValueInfo>
                            </Bd.InputContainer>

                            <Bd.InputContainer style={{ height: "200px" }}>
                                <Bd.TextArea value={postContentInput} onChange={(e) => setPostContentInput(e.target.value)}
                                    placeholder="게시글의 내용을 입력해주세요." />
                                <Bd.ValueInfo>내용</Bd.ValueInfo>
                            </Bd.InputContainer>

                            <Bd.RegiButton onClick={RegiBoard}>등록하기</Bd.RegiButton>
                        </Bd.RegiBox>

                        <Bd.RegiClose onClick={() => setPostRegiOnOff(false)} />
                    </Bd.RegiContainer>
                </Bd.PostContainer>



                {/* 자유게시판 부분 */}
                <Bd.FreeContainer style={boardType ? { display: "block" } : { display: "none" }}>
                    <Bd.FreeRegBtn onClick={clickRegi}>글 등록</Bd.FreeRegBtn>

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



                    {/* 자유게시판 등록 */}
                    <Bd.RegiContainer style={freeRegiOnOff ? { display: "block" } : { display: "none" }}>
                        <Bd.RegiBox>
                            <Bd.RegiTitle>자유게시판 등록하기</Bd.RegiTitle>

                            <Bd.InputContainer style={{ height: "50px" }} >
                                <Bd.Input value={freeTitleInput} onChange={(e) => setFreeTitleInput(e.target.value)}
                                    placeholder="게시글의 제목을 입력해주세요." />
                                <Bd.ValueInfo>제목</Bd.ValueInfo>
                            </Bd.InputContainer>

                            <Bd.InputContainer style={{ height: "200px" }}>
                                <Bd.TextArea value={freeContentInput} onChange={(e) => setFreeContentInput(e.target.value)}
                                    placeholder="게시글의 내용을 입력해주세요." />
                                <Bd.ValueInfo>내용</Bd.ValueInfo>
                            </Bd.InputContainer>

                            <Bd.RegiButton onClick={RegiBoard}>등록하기</Bd.RegiButton>
                        </Bd.RegiBox>

                        <Bd.RegiClose onClick={() => setFreeRegiOnOff(false)} />
                    </Bd.RegiContainer>
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