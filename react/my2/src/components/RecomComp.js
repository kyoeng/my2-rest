import { useState, useLayoutEffect } from "react";
import "./styles/Loader.css";
import * as Rc from "./styles/RecomCompStyle";


export default function RecomComp() {
    const [resize, setResize] = useState(window.innerWidth);    // 브라우저 너비 저장할 변수
    const [boxMap, setBoxMap] = useState(true);                 // 반응형 적용 시 추천 여행지 화면을 위한 변수

    // 브라우저 너비 저장 변수 변경 함수
    function handleResize() { setResize(window.innerWidth); }


    // Flask와 통신 후 view 처리 ( 추천 부분 )
    useLayoutEffect(() => {
        // toFlask({
        //     url: '/recommend',
        //     method: 'get'
        // })

        const mapArea = document.getElementById('map'); // 지도를 나타낼 태그 참조
        // 지도의 중심과 크기 레벨
        const option = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };

        // 지도 생성
        const map = new window.kakao.maps.Map(mapArea, option);

        // 지도의 위치 ( 위도, 경도 ) (마커에 표시할)
        const position = [
            {
                title: '카카오',
                latlng: new window.kakao.maps.LatLng(33.450705, 126.570677)
            },
            {
                title: '생태연못',
                latlng: new window.kakao.maps.LatLng(33.450936, 126.569477)
            },
            {
                title: '텃밭',
                latlng: new window.kakao.maps.LatLng(33.450879, 126.569940)
            },
            {
                title: '근린공원',
                latlng: new window.kakao.maps.LatLng(33.451393, 126.570738)
            }
        ]

        // 마커 생성
        for (let i = 0; i < position.length; i++) {
            new window.kakao.maps.Marker({
                map: map,
                position: position[i].latlng,
                title: position[i].title
            });
        }
        // const marker = new window.kakao.maps.Marker({
        //     position: position,
        // });

        // 마커 지도에 표시
        // marker.setMap(map);

        // 클릭 시 나타낼 태그 변수
        // const test = '<span>test</span>';

        // 해당 정보 태그와 x버튼 표시 true
        // const ifwindow = new window.kakao.maps.InfoWindow({
        //     content: test,
        //     removable: true
        // });

        // 마커의 클릭 이벤트
        // window.kakao.maps.event.addListener(marker, 'click', function () {
        //     ifwindow.open(map, marker);
        // });

        // 브라우저 화면 크기 변화에 대한 이벤트
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    return (
        <Rc.RecommendContainer>
            <Rc.RecommendTitle>
                <Rc.RecommendTitleLine />

                <Rc.RecommendTitleText>
                    오늘의 추천 여행지
                </Rc.RecommendTitleText>
            </Rc.RecommendTitle>

            <Rc.RecommendAreaBox>
                경기도 안성시
            </Rc.RecommendAreaBox>

            <Rc.ContentContainer>
                <Rc.ContentBox style={resize > 800 ? { visibility: "visible" } : boxMap ? { visibility: "visible" } : { visibility: "hidden" }}>

                </Rc.ContentBox>

                <Rc.ContentMap id="map" style={resize > 800 ? { visibility: "visible" } : boxMap ? { visibility: "hidden" } : { visibility: "visible" }} />

                <Rc.BoxMapChangeBtn onClick={() => setBoxMap(!boxMap)}>지도로 보기</Rc.BoxMapChangeBtn>
            </Rc.ContentContainer>
        </Rc.RecommendContainer>
    )
}