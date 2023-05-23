import * as Idx from '../components/styles/MainStyle';
import { PositionLink } from "../components/styles/HeaderStyle";
import Banners from "../components/Banners";
import PartyComp from "../components/PartyComp";
import RecomComp from "../components/RecomComp";
import ScrollTop from '../components/commons/ScrollTop';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { getCookie } from '../components/commons/Cookie';

const Index = () => {
    const [login, setLogin] = useState(false);      // 로그인 확인용

    useLayoutEffect(() => {
        if (getCookie("token") !== undefined && getCookie("id") !== undefined) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }, []);

    return (
        <Idx.IndexMainContainer>
            {/* 배너 부분 */}
            <Banners />


            {/* index 메인 네비 버튼들 */}
            <Idx.IdxMainCateContainer>
                <Idx.IdxMainCateBox>
                    <Idx.IdxMainCateImg src='./images/icons/map_blue.png' />
                    <Idx.IdxMainCateText>여행지 찾기</Idx.IdxMainCateText>
                    <PositionLink to="/finder" onClick={ScrollTop}
                        style={{ borderRadius: "100px", overflow: "hidden" }} />
                </Idx.IdxMainCateBox>

                <Idx.IdxMainCateBox>
                    <Idx.IdxMainCateImg src='./images/icons/list_blue.png' />
                    <Idx.IdxMainCateText>스토리 보기</Idx.IdxMainCateText>
                    <PositionLink to="/story" onClick={ScrollTop}
                        style={{ borderRadius: "100px", overflow: "hidden" }} />
                </Idx.IdxMainCateBox>

                <Idx.IdxMainCateBox>
                    <Idx.IdxMainCateImg src='./images/icons/add_blue.png' />
                    <Idx.IdxMainCateText>스토리 작성</Idx.IdxMainCateText>
                    <PositionLink to={login ? "/regi-story" : "/login"} onClick={ScrollTop}
                        style={{ borderRadius: "100px", overflow: "hidden" }} />
                </Idx.IdxMainCateBox>

                <Idx.IdxMainCateBox>
                    <Idx.IdxMainCateImg src='./images/icons/post_blue.png' />
                    <Idx.IdxMainCateText>게시판으로</Idx.IdxMainCateText>
                    <PositionLink to="/board" onClick={ScrollTop}
                        style={{ borderRadius: "100px", overflow: "hidden" }} />
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