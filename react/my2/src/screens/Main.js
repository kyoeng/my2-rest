import * as Idx from '../components/styles/MainStyle';
import { PositionLink } from "../components/styles/HeaderStyle";
import Banners from "../components/Banners";
import PartyComp from "../components/PartyComp";
import RecomComp from "../components/RecomComp";

const Index = () => {

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
                    <Idx.IdxMainCateImage src="./images/icons/list_white.png" />
                    <Idx.IdxMainCateText>구경하기</Idx.IdxMainCateText>
                    <PositionLink to="/" />
                </Idx.IdxMainCateBox>

                <Idx.IdxMainCateBox>
                    <Idx.IdxMainCateImage src="./images/icons/add_white.png" />
                    <Idx.IdxMainCateText>글쓰기</Idx.IdxMainCateText>
                    <PositionLink to="/" />
                </Idx.IdxMainCateBox>

                <Idx.IdxMainCateBox>
                    <Idx.IdxMainCateImage src="./images/icons/customer_white.png" />
                    <Idx.IdxMainCateText>고객센터</Idx.IdxMainCateText>
                    <PositionLink to="/" />
                </Idx.IdxMainCateBox>
            </Idx.IdxMainCateContainer>



            {/* 이번 달의 축제 정보 */}
            <PartyComp />


            {/* 추천 여행지 */}
            <RecomComp />

        </Idx.IndexMainContainer>
    );

}


export default Index;