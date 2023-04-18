import { useState, useRef, useLayoutEffect } from "react";
import * as Fn from "../components/styles/FinderStyle";
import { toFlask } from "../components/commons/Axioses";
import "../components/styles/Loader.css";



export default function Finder() {
    const [status, setStatus] = useState(false);    // 검색 상태에 대한 변수 ( false : 검색 전, true : 검색 후)
    const [keyword, setKeyword] = useState("");     // 검색어에 대한 변수
    const [recomKey, setRecomKey] = useState("");   // 추천 검색어에 대한 변수
    const loading = useRef();                       // 로딩화면에 대한 변수
    const [result, setResult] = useState();         // 검색 결과 View에 대한 변수

    // 추천 검색어 배열
    const trip = [
        "\"안성\"", "\"예산\"", "\"속초\"", "\"당진\"", "\"인천\"",
        "\"포항\"", "\"논산\"", "\"목포\"", "\"제주\"", "\"대구\""
    ];

    // 열린 InfoWindow를 저장할 변수 (닫기위한 용도)
    let beforeIw = useRef(null);



    // 최초 렌더링이나 새로고침 시 동작하는 함수
    useLayoutEffect(() => {
        const recomDes = trip[Math.floor(Math.random() * 10)];
        setRecomKey(recomDes + "으로 떠나보는건 어떤가요?");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    // 검색 실행
    function search() {
        if (keyword.length > 0) {
            if (!status) setStatus(true);

            loading.current.style.display = "block";    // 로딩화면 보이게

            toFlask({
                method: "get",
                url: "/finder/" + keyword,
            }).then((res) => {
                if (res.status === 200 && res.data !== 500) {
                    setResult(
                        <Fn.ResultContentBox>
                            {res.data.finder.titles.map((v, i) => {
                                return (
                                    <Fn.ResultContents key={`result_${i}`}>
                                        <Fn.ResultTitle>{v}</Fn.ResultTitle>
                                        <Fn.ResultAddr>{res.data.finder.addrs[i]}</Fn.ResultAddr>
                                        <Fn.ResultShareBtn />
                                        <Fn.ResultMapViewBtn onClick={() => mapClick(res.data.finder.titles[i], res.data.latlng[i], i)}>
                                            지도 보기
                                        </Fn.ResultMapViewBtn>
                                    </Fn.ResultContents>
                                )
                            })}
                        </Fn.ResultContentBox>
                    );

                    const mapArea = document.getElementById('finderMap'); // 지도를 나타낼 태그 참조

                    // 지도의 중심과 크기 레벨
                    const option = {
                        center: new window.kakao.maps.LatLng(res.data.center.lat, res.data.center.lng),
                        level: 10
                    };

                    // 지도 생성
                    const map = new window.kakao.maps.Map(mapArea, option);

                    // 마커에 대한 정보 저장
                    const position = [];
                    for (let i = 0; i < res.data.finder.titles.length; i++) {
                        position.push({
                            title: res.data.finder.titles[i],
                            latlng: new window.kakao.maps.LatLng(res.data.latlng[i].lat, res.data.latlng[i].lng)
                        });
                    }

                    // 마커 생성
                    let markers = [];
                    for (let i = 0; i < position.length; i++) {
                        markers.push(new window.kakao.maps.Marker({
                            map: map,
                            position: position[i].latlng,
                            title: position[i].title
                        }));
                    }

                    // 지도 보기의 클릭 이벤트
                    function mapClick(title, latlng, num) {
                        let center = new window.kakao.maps.LatLng(latlng.lat, latlng.lng);
                        map.setCenter(center);
                        map.setLevel(5);

                        let iwbox = document.createElement('div');
                        iwbox.classList.add('iwbox');

                        let iwTitle = document.createElement('p');
                        iwTitle.classList.add('iwTitle');
                        iwTitle.textContent = title;

                        let iwLink = document.createElement('a');
                        iwLink.classList.add('iwLink');
                        iwLink.textContent = 'Naver로 해당 여행지 보기';
                        iwLink.setAttribute('href', 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=' + title);
                        iwLink.setAttribute('target', '_blank');

                        iwbox.append(
                            iwTitle,
                            iwLink
                        );

                        const ifwindow = new window.kakao.maps.InfoWindow({
                            content: iwbox,
                            removable: true
                        });

                        if (beforeIw.current !== null) beforeIw.current.close();

                        ifwindow.open(map, markers[num]);

                        beforeIw.current = ifwindow;
                    }

                    loading.current.style.display = "none";     // 로딩화면 안보이게

                } else {
                    console.log(res.data);
                    console.log(res.status);
                }
            }).catch((err) => {
                console.log(err);
            });
        } else {
            alert("검색해볼 여행지를 입력해주세요.");
        }
    }

    // 검색창에서의 엔터키 이벤트
    function enterKey(e) {
        if (e.keyCode === 13) {
            search();
        }
    }


    return (
        <Fn.FinderContainer>
            <Fn.FinderTitle>Find a Trip</Fn.FinderTitle>

            <Fn.FinderInfo>관심있는 지역을 입력하면 지역의 유명 관광지가 나와요!</Fn.FinderInfo>

            <Fn.FinderSearchBox>
                <Fn.FinderSearchInput type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}
                    placeholder="여행지를 입력해보세요!" onKeyUp={(e) => enterKey(e)} />
                <Fn.FinderSeachBtn onClick={search} />
            </Fn.FinderSearchBox>

            <Fn.FinderBeforeSearch style={status ? { display: "none" } : { display: "block" }}>
                {recomKey}
            </Fn.FinderBeforeSearch>

            <Fn.FinderResultContainer style={status ? { display: "flex" } : { display: "none" }}>
                <div className="loaderContainer" ref={loading}>
                    <div className="loader"></div>
                </div>

                {result}
                <Fn.ResultMap id="finderMap" />
            </Fn.FinderResultContainer>
        </Fn.FinderContainer>
    );

}