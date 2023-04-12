import { useState, useEffect, useRef } from "react";
import "./styles/Loader.css";
import "./styles/MapInfo.css";
import * as Rc from "./styles/RecomCompStyle";
import { toFlask } from "./commons/Axioses";


export default function RecomComp() {
    // 추천 여행지 컨텐츠를 저장할 변수
    const [recomView, setRecomView] = useState(
        <div className="loaderContainer">
            <div className="loader"></div>
        </div>
    );

    // 추천 여행지 지역에 대한 변수
    const [recomArea, setRecomArea] = useState("");

    // 열린 InfoWindow를 저장할 변수 (닫기위한 용도)
    let beforeIw = useRef(null);


    // Flask 서버로부터 데이터 받아서 View 처리
    useEffect(() => {
        toFlask({
            method: "get",
            url: "/recommend"
        }).then((res) => {
            if (res.status === 200 && res.data !== 500) {
                setRecomView(
                    <Rc.ContentBox>
                        {res.data.recom.titles.map((v, i) => {
                            return (
                                <Rc.Contents key={`contents_${i}`}>
                                    <Rc.ContentsTitle>{v}</Rc.ContentsTitle>
                                    <Rc.ContensAddr>{res.data.recom.addrs[i]}</Rc.ContensAddr>
                                    <Rc.ContentsShareBtn />
                                    <Rc.ContentsViewBtn onClick={() => mapClick(res.data.recom.titles[i], res.data.latlng[i], i)}>지도 보기</Rc.ContentsViewBtn>
                                </Rc.Contents>
                            );
                        })}
                    </Rc.ContentBox>
                );

                const mapArea = document.getElementById('map'); // 지도를 나타낼 태그 참조

                // 지도의 중심과 크기 레벨
                const option = {
                    center: new window.kakao.maps.LatLng(res.data.randLatLng.lat, res.data.randLatLng.lng),
                    level: 10
                };

                // 지도 생성
                const map = new window.kakao.maps.Map(mapArea, option);

                // 마커에 대한 정보 저장
                const position = [];
                for (let i = 0; i < res.data.recom.titles.length; i++) {
                    position.push({
                        title: res.data.recom.titles[i],
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

                // 추천 여행지 지역 변수에 등록
                setRecomArea(res.data.rand);

            } else {
                console.log(res.data);
                console.log(res.status);
            }
        }).catch((err) => {
            console.log(err);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Rc.RecommendContainer>
            <Rc.RecommendTitle>
                <Rc.RecommendTitleLine />

                <Rc.RecommendTitleText>오늘의 추천 여행지</Rc.RecommendTitleText>
            </Rc.RecommendTitle>

            <Rc.RecommendAreaBox>
                {recomArea}
            </Rc.RecommendAreaBox>

            <Rc.ContentContainer>
                {recomView}
                <Rc.ContentMap id="map" />
            </Rc.ContentContainer>
        </Rc.RecommendContainer>
    )
}