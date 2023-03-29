import { useRef, useState } from "react";
import * as Head from "./styles/HeaderStyle";
import data from "../components/staticCateData.json";

const Header = () => {
    const MenuBtn = useRef();                           // 메뉴 버튼에 대한 변수
    const Menu = useRef();                              // 메뉴창에 대한 변수
    const [menuOnoff, setMenuOnoff] = useState(false);  // 메뉴 팝업이 나오고 안나오고를 결정한 변수
    const [status, setStatus] = useState("");           // 카테고리의 키워드를 저장할 변수

    // 카테고리 데이터를 저장할 배열 변수
    let cate = status === "tt" ? data.tt : status === "tc" ? data.tc : status === "others" ? data.others : [];

    // 메뉴 버튼 이벤트
    function onoffMenu() {
        if (menuOnoff) {
            MenuBtn.current.style.background = 'url(./images/icons/NavBtn_white.png) center/cover';
            Menu.current.style.visibility = 'hidden';
            Menu.current.style.opacity = '0';
            setStatus("");
        } else {
            MenuBtn.current.style.background = 'url(./images/icons/close_white.png) center/60% no-repeat';
            Menu.current.style.visibility = 'visible';
            Menu.current.style.opacity = '1';
        }

        setMenuOnoff(!menuOnoff);
    }

    // 카테고리 클릭 이벤트
    function clickCate(code) {
        setStatus(code);
    }

    // 카테고리별 메뉴 그리기
    let outputCate = cate.map((v, i) => {
        return (
            <Head.CateValues to="/" key={`values${i}`}>{v}</Head.CateValues>
        );
    });

    return (
        <Head.HeaderContainer>
            {/* 고정 헤더 */}
            <Head.HeaderInnerBox>
                {/* 로고 부분 */}
                <Head.ProjectTitle>
                    MY2
                    <Head.PositionLink to="/" />
                </Head.ProjectTitle>

                {/* 메뉴 버튼 부분 */}
                <Head.NavBtn onClick={onoffMenu} ref={MenuBtn} />

                {/* 검색 및 로그인 버튼 부분 */}
                <Head.SearchLoginBox>
                    <Head.SearchBtn>
                        <Head.NonePosiLink />
                    </Head.SearchBtn>

                    <Head.LoginBtn>
                        <Head.NonePosiLink />
                    </Head.LoginBtn>
                </Head.SearchLoginBox>
            </Head.HeaderInnerBox>

            {/* 메뉴창 */}
            <Head.MenuContainer ref={Menu}>
                <Head.MenuBoxLeft>
                    <Head.Cate onClick={() => clickCate('tt')}>
                        텐트/타프
                        <Head.SelectCate style={status === 'tt' ? { display: 'block' } : {}} />
                    </Head.Cate>

                    <Head.Cate onClick={() => clickCate('tc')}>
                        테이블/의자
                        <Head.SelectCate style={status === 'tc' ? { display: 'block' } : {}} />
                    </Head.Cate>

                    <Head.Cate onClick={() => clickCate('others')}>
                        기타
                        <Head.SelectCate style={status === 'others' ? { display: 'block' } : {}} />
                    </Head.Cate>

                    <Head.Cate onClick={() => clickCate(null)}>
                        캠핑장 찾기
                        <Head.SelectCate />
                    </Head.Cate>
                </Head.MenuBoxLeft>

                <Head.MenuBoxRight>
                    {outputCate}
                </Head.MenuBoxRight>
            </Head.MenuContainer>
        </Head.HeaderContainer>
    );

}


export default Header;