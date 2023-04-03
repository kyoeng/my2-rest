import Banners from "../components/Banners";
import { PositionLink } from "../components/styles/HeaderStyle";
import * as Idx from '../components/styles/IndexStyle';
import { useEffect } from 'react';

const Index = () => {
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
        const position = new window.kakao.maps.LatLng(33.450701, 126.570667);

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
            position: position,
        });

        // 마커 지도에 표시
        marker.setMap(map);

        // 클릭 시 나타낼 태그 변수
        const test = '<span>test</span>';

        // 해당 정보 태그와 x버튼 표시 true
        const ifwindow = new window.kakao.maps.InfoWindow({
            content: test,
            removable: true
        });

        // 마커의 클릭 이벤트
        window.kakao.maps.event.addListener(marker, 'click', function () {
            ifwindow.open(map, marker);
        });
    }, []);

    console.log(window);

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
                    <Idx.ContentBox>

                    </Idx.ContentBox>

                    <Idx.ContentMap id="map" />
                </Idx.ContentContainer>
            </Idx.RecommendContainer>
        </Idx.IndexMainContainer>
    );

}


export default Index;