import { useState } from "react";
import * as Rs from "../components/styles/RegStoryStyle";
import { useRef } from "react";
import { toSpringWithToken } from "../components/commons/Axioses";
import { getCookie } from "../components/commons/Cookie";
import { useNavigate } from "react-router-dom";
import ScrollTop from "../components/commons/ScrollTop";




export default function RegStory() {
    const [inputTitle, setInputTitle] = useState("");       // 스토리 제목
    const [inputArea, setInputArea] = useState("");         // 스토리 지역
    const [inputContent, setInputContent] = useState("");   // 스토리 내용
    const inputFiles = useRef();                            // 사진 등록 input[file] 참조

    const preTitle = useRef();                              // 미리보기 타이틀 참조
    const loading = useRef();                               // 로딩화면 참조

    let [previews, setPreviews] = useState([]);               // 업로드 사진 미리보기(view용)

    const navi = useNavigate();


    // Reset 버튼 이벤트
    function inputReset() {
        if (window.confirm("내용을 초기화 하시겠습니까?")) {
            preTitle.current.style.display = 'none';
            setPreviews([]);
            setInputTitle("");
            setInputArea("");
            setInputContent("");
        } else {
            return
        }
    }


    // 사진 업로드 시 미리보기 이벤트
    function previewEvt() {
        if (previews.length > 0) setPreviews([]);

        let pv = [];
        const files = inputFiles.current.files;

        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.onloadend = () => {
                console.log(files[i].type);
                console.log(reader);
                if (files[i].type.split("/")[0] === "video") {
                    pv.push(
                        <Rs.PreviewsVideo key={`pv_${i}`} autoPlay controls muted loop>
                            <source src={reader.result}/>
                        </Rs.PreviewsVideo>
                    );
                } else {
                    pv.push(<Rs.Previews key={`pv_${i}`} src={reader.result} alt="" />);
                }
            }
        }

        preTitle.current.style.display = 'block';
        loading.current.style.display = 'block';

        setTimeout(() => {
            loading.current.style.display = 'none';
            setPreviews(pv);
        }, 1000);
    }


    // 스토리 등록 요청
    function reqStory() {
        if (inputTitle === "" || inputContent === "" || inputArea === "" || inputFiles.current.files.length < 1) {
            alert("입력란을 확인 후 다시 시도해주세요.");
        } else {
            let formData = new FormData();

            formData.append("userId", getCookie("id"));
            formData.append("storyTitle", inputTitle);
            formData.append("storyArea", inputArea);
            formData.append("storyContent", inputContent);

            for (let i = 0; i < inputFiles.current.files.length; i++) {
                formData.append("files", inputFiles.current.files[i]);
            }

            toSpringWithToken({
                headers: {
                    "Content-Type": "multiple/form-data"
                },
                method: "post",
                url: "/reg-story",
                data: formData
            }).then((res) => {
                if (res.status === 200 && res.data) {
                    alert("등록이 완료되었습니다.");
                    navi("/story", { replace: true });
                } else {
                    alert("등록에 실패하였습니다. 다시 시도해주세요.");
                    console.log(res);
                }
            }).catch((err) => {
                if (err.code === "ERR_NETWORK") {
                    alert("로그인 후 이용해주세요.");
                    ScrollTop();
                    navi("/login", { replace: true });
                } else {
                    console.log(err);
                }
            });
        }
    }


    return (
        <Rs.RegStoryContainer>
            <Rs.RegStoryTitle>Story 등록</Rs.RegStoryTitle>

            <Rs.PreviewTitle ref={preTitle}>미 리 보 기</Rs.PreviewTitle>
            <Rs.PreviewContainer>
                <div className="storyLoader" ref={loading}>
                    <div className="loader"></div>
                </div>

                {previews}
            </Rs.PreviewContainer>

            <Rs.RegStoryDataBox>

                <Rs.RegStoryUploadBox>
                    <Rs.RegStoryUploadText>
                        사진을 등록해 추억을 남겨보세요!
                    </Rs.RegStoryUploadText>

                    <Rs.RegStoryLabel>
                        사진 등록
                        <Rs.RegStoryFile type="file" multiple ref={inputFiles} accept="video/*, image/*" onChange={previewEvt} />
                    </Rs.RegStoryLabel>
                </Rs.RegStoryUploadBox>

                <Rs.RegStoryInputBox>
                    <Rs.RegStoryInput value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} placeholder="100자 이내로 작성해주세요." />
                    <Rs.RegStoryValueInfo>스토리 제목을 입력해주세요.</Rs.RegStoryValueInfo>
                </Rs.RegStoryInputBox>

                <Rs.RegStoryInputBox>
                    <Rs.RegStoryInput value={inputArea} onChange={(e) => setInputArea(e.target.value)} placeholder="100자 이내로 작성해주세요." />
                    <Rs.RegStoryValueInfo>어느 지역인지 남겨주세요!</Rs.RegStoryValueInfo>
                </Rs.RegStoryInputBox>

                <Rs.RegStoryTextBox>
                    <Rs.RegStoryText value={inputContent} onChange={(e) => setInputContent(e.target.value)} maxLength="300" placeholder="300자 이내로 작성해주세요." />
                    <Rs.RegStoryValueInfo>스토리 내용이나 남기고 싶은 글을 입력해주세요.</Rs.RegStoryValueInfo>
                </Rs.RegStoryTextBox>

                <Rs.ButtonContaner>
                    <Rs.RegStoryBtn style={{ width: "30%" }} onClick={inputReset}>
                        RESET
                    </Rs.RegStoryBtn>

                    <Rs.RegStoryBtn style={{ width: "65%" }} onClick={reqStory}>
                        등 록 하 기
                    </Rs.RegStoryBtn>
                </Rs.ButtonContaner>
            </Rs.RegStoryDataBox>
        </Rs.RegStoryContainer>
    );
}