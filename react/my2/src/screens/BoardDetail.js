import { useLayoutEffect, useRef, useState } from "react";
import * as De from "../components/styles/BoardDetailStyle";
import { useParams } from "react-router-dom";
import "../components/styles/Loader.css";
import { forTokenCheckReq, toSpringBoot, toSpringWithToken } from "../components/commons/Axioses";
import { getCookie } from "../components/commons/Cookie";



export default function BoardDetail() {
    // 쿼리스트링 부분 가져오기(freeSeq)
    const seq = useParams().seq;

    // 게시글 데이터를 위한 변수
    const [detail, setDetail] = useState({
        "title": "",
        "content": "",
        "userId": "",
        "regDate": ""
    });

    // 댓글 데이터를 위한 변수
    const [cmts, setCmts] = useState([]);

    // 댓글 작성 textarea 내용을 위한 변수
    const [comments, setComments] = useState("");

    const loader = useRef();        // 로딩 화면



    function req(seq) {
        loader.current.style.display = "block";

        toSpringBoot({
            method: "get",
            url: `/free-detail?seq=${seq}`
        }).then((res) => {
            if (res.status === 200 && res.data !== null) {
                setDetail({
                    "title": res.data.detail.title,
                    "content": res.data.detail.content,
                    "userId": res.data.detail.userId,
                    "regDate": res.data.detail.regDate
                });
                setCmts(res.data.comments);
            }
        }).catch((err) => {
            console.log(err);
        });

        loader.current.style.display = "none";
    }


    useLayoutEffect(() => {
        req(seq);
    }, [seq]);


    // 댓글 등록
    function regCmt() {
        forTokenCheckReq({}).then((res) => {
            if (res.data) {
                if (comments !== "") {
                    toSpringWithToken({
                        url: "/regi-cmt",
                        method: "post",
                        data: {
                            "freeSeq": seq,
                            "cmtContent": comments,
                            "userId": getCookie("id")
                        }
                    }).then((res) => {
                        if (res.status === 200 && res.data) {
                            alert("댓글이 등록되었습니다.");
                            setComments("");
                            req(seq);
                        } else {
                            alert("댓글 등록에 실패하였습니다. 다시 시도해주세요.");
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
                } else {
                    alert("댓글 입력 후 등록해주세요.");
                }
            } else {
                alert("로그인 후 이용해주세요.");
            }
        }).catch((err) => {
            console.log(err);
        });
    }




    return (
        <De.DetailContainer>
            <De.DetailTitle>
                Board
                <De.DetailTitleInfo>
                    {detail.userId}님의 글
                </De.DetailTitleInfo>
            </De.DetailTitle>



            {/* 게시글 정보 및 내용 */}
            <De.DetailBoardBox>
                <De.DetailBoardTitle>
                    {detail.title}
                </De.DetailBoardTitle>

                <De.DetailBoardInfo>
                    <De.DetailBoardInfoValues style={{ width: "100px" }}>
                        글번호&nbsp;:&nbsp;{seq}
                    </De.DetailBoardInfoValues>

                    <De.DetailBoardInfoValues style={{ width: "250px", textAlign: "right" }}>
                        등록일&nbsp;:&nbsp;{detail.regDate}
                    </De.DetailBoardInfoValues>
                </De.DetailBoardInfo>

                <De.DetailBoardContentBox>
                    {detail.content}
                </De.DetailBoardContentBox>
            </De.DetailBoardBox>



            {/* 게시글 관련 댓글 */}
            <De.DetailCommentsBox>
                <De.DetailCommentsTitle>댓글</De.DetailCommentsTitle>

                {cmts.map((v, i) => {
                    return <De.DetailComments key={`cmt_${i}`}>{`${v.userId} : ${v.cmtContent}`}</De.DetailComments>
                })}
            </De.DetailCommentsBox>



            {/* 댓글 등록 */}
            <De.DetailCommentsRegBox>
                <De.CommentsTitle>댓글 등록하기</De.CommentsTitle>

                <De.CommentsInput maxLength="300" value={comments} onChange={(e) => setComments(e.target.value)}></De.CommentsInput>

                <De.CommentsRegBtn onClick={regCmt}>등록</De.CommentsRegBtn>
            </De.DetailCommentsRegBox>



            {/* 로딩 화면 */}
            <div className="loaderContainerFix" ref={loader}>
                <div className="loader"></div>
            </div>
        </De.DetailContainer>
    );

}