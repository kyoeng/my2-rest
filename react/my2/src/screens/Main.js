import { useState, useEffect } from "react";
import Banners from "../components/Banners";
import { PositionLink } from "../components/styles/HeaderStyle";
import * as Idx from '../components/styles/MainStyle';

const Index = () => {
    const [resize, setResize] = useState(window.innerWidth);    // 브라우저 너비 저장할 변수
    const [boxMap, setBoxMap] = useState(true);                 // 반응형 적용 시 추천 여행지 화면을 위한 변수

    // 브라우저 너비 저장 변수 변경 함수
    function handleResize() { setResize(window.innerWidth); }

    useEffect(() => {
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
        <Idx.IndexMainContainer>
            {/* 배너 부분 */}
            <Banners />

            {/* index 메인 네비 버튼들 */}
            <Idx.IdxMainCateContainer>
                <Idx.IdxMainCateBox>
                    <Idx.IdxMainCateImage src="./images/icons/map_white.png" />
                    <Idx.IdxMainCateText>여행지 찾기</Idx.IdxMainCateText>
                    <PositionLink to="/" />
                </Idx.IdxMainCateBox>

                <Idx.IdxMainCateBox>
                    <Idx.IdxMainCateImage src="./images/icons/add_white.png" />
                    <Idx.IdxMainCateText>구경하기</Idx.IdxMainCateText>
                    <PositionLink to="/" />
                </Idx.IdxMainCateBox>

                <Idx.IdxMainCateBox>
                    <Idx.IdxMainCateImage src="./images/icons/customer_white.png" />
                    <Idx.IdxMainCateText>글쓰기</Idx.IdxMainCateText>
                    <PositionLink to="/" />
                </Idx.IdxMainCateBox>

                <Idx.IdxMainCateBox>
                    <Idx.IdxMainCateImage src="./images/icons/list_white.png" />
                    <Idx.IdxMainCateText>고객센터</Idx.IdxMainCateText>
                    <PositionLink to="/" />
                </Idx.IdxMainCateBox>
            </Idx.IdxMainCateContainer>

            {/* 추천 여행지 */}
            <Idx.RecommendContainer>
                <Idx.RecommendTitle>
                    <Idx.RecommendTitleLine />

                    <Idx.RecommendTitleText>
                        오늘의 추천 여행지
                    </Idx.RecommendTitleText>
                </Idx.RecommendTitle>

                <Idx.RecommendAreaBox>
                    경기도 안성시
                </Idx.RecommendAreaBox>

                <Idx.ContentContainer>
                    <Idx.ContentBox style={resize > 800 ? { visibility: "visible" } : boxMap ? { visibility: "visible" } : { visibility: "hidden" }}>

                    </Idx.ContentBox>

                    <Idx.ContentMap id="map" style={resize > 800 ? { visibility: "visible" } : boxMap ? { visibility: "hidden" } : { visibility: "visible" }} />

                    <Idx.BoxMapChangeBtn onClick={() => setBoxMap(!boxMap)}>지도로 보기</Idx.BoxMapChangeBtn>
                </Idx.ContentContainer>
            </Idx.RecommendContainer>
        </Idx.IndexMainContainer>
    );

}


export default Index;