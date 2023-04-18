import { useRef, useState, useEffect, useLayoutEffect } from "react";
import * as Head from "./styles/HeaderStyle";
import ScrollTop from './commons/ScrollTop';
import { toSpringBoot } from "./commons/Axioses";
import { getCookie, removeCookie } from "./commons/Cookie";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const MenuBtn = useRef();                           // 메뉴 버튼에 대한 변수
    const Menu = useRef();                              // 메뉴창에 대한 변수
    const Search = useRef();                            // 검색창에 대한 변수
    const [menuOnoff, setMenuOnoff] = useState(false);      // 메뉴 팝업이 나오고 안나오고를 결정할 변수
    const [searchOnoff, setSearchOnoff] = useState(false);  // 검색 팝업이 나오고 안나오고를 결정할 변수
    const [resize, setResize] = useState(window.innerWidth);    // 브라우저 너비 저장할 변수

    // 로그인 상태 여부에 관한 변수
    const [login, setLogin] = useState(false);
    const userImage = useRef("");
    const navi = useNavigate();
    const location = useLocation();


    // 로그인 상태 확인 ( url 바뀔때 마다 실행 )
    useLayoutEffect(() => {
        if (getCookie("token") !== undefined && getCookie("image") !== undefined) {
            userImage.current = getCookie("image");
            setLogin(true);
        }
    }, [location.pathname]);


    // 브라우저 너비 저장 변수 변경 함수
    function handleResize() { setResize(window.innerWidth); }


    // Resize 시 적용할 이벤트
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);



    // 메뉴 버튼 이벤트
    function onoffMenu() {
        if (menuOnoff) {
            // 닫히는 이벤트
            if (window.innerWidth < 1024) {
                MenuBtn.current.style.background = 'url(./images/icons/NavBtn_blue.png) center/cover';
            } else {
                MenuBtn.current.style.background = 'url(./images/icons/NavBtn_white.png) center/cover';
            }
            Menu.current.style.visibility = 'hidden';
            Menu.current.style.opacity = '0';

        } else {
            // 열리는 이벤트
            if (window.innerWidth < 1024) {
                MenuBtn.current.style.background = 'url(./images/icons/close_blue.png) center/60% no-repeat';
            } else {
                MenuBtn.current.style.background = 'url(./images/icons/close_white.png) center/60% no-repeat';
            }
            Menu.current.style.visibility = 'visible';
            Menu.current.style.opacity = '1';
        }

        setMenuOnoff(!menuOnoff);
    }


    // 로그인을 필요로 하는 페이지의 버튼 이벤트
    function loginedPage(e) {
        e.preventDefault();

        toSpringBoot({
            url: "/check",
            method: "get",
            headers: {
                Authorization: `Bearer ${getCookie("token")}`
            }
        }).then((res) => {
            console.log(res);
            if (res.data) {
                navi(e.target.getAttribute('href'));
            } else {
                setLogin(false);
                removeCookie("token");
                removeCookie("image");
                removeCookie("id");
                alert("로그인 후 이용해주세요.");
                navi("/login", { replace: true });
                ScrollTop();
            }
        }).catch((err) => {
            console.log(err);
        });
    }



    // 검색창 이벤트
    function onoffSearch() {
        if (searchOnoff) {
            // 닫히는 이벤트
            Search.current.style.visibility = 'hidden';
            Search.current.style.opacity = '0';

        } else {
            // 열리는 이벤트
            Search.current.style.visibility = 'visible';
            Search.current.style.opacity = '1';
        }

        setSearchOnoff(!searchOnoff);
    }




    return (
        <Head.HeaderContainer>
            {/* 고정 헤더 */}
            <Head.HeaderInnerBox>
                {/* 로고 부분 */}
                <Head.ProjectTitle>
                    MY2
                    <Head.PositionLink to="/" onClick={ScrollTop} />
                </Head.ProjectTitle>

                {/* 메뉴 버튼 부분 */}
                <Head.NavBtn onClick={onoffMenu} ref={MenuBtn}
                    style={resize < 1024 && menuOnoff ? { background: 'url(./images/icons/close_blue.png) center/60% no-repeat' } :
                        resize < 1024 && !menuOnoff ? { background: 'url(./images/icons/NavBtn_blue.png) center/cover' } :
                            resize >= 1024 && menuOnoff ? { background: 'url(./images/icons/close_white.png) center/60% no-repeat' } :
                                resize >= 1024 && !menuOnoff ? { background: 'url(./images/icons/NavBtn_white.png) center/cover' } : {}} />

                {/* 검색 및 로그인 버튼 부분 */}
                <Head.SearchLoginBox>
                    <Head.SearchBtn onClick={onoffSearch} />

                    <Head.LoginBtn>
                        <Head.NonePosiLink to={login ? "/mypage" : "/login"} onClick={login ? (e) => loginedPage(e) : ScrollTop}
                            style={login ? { background: `url(${userImage.current}) center/cover` } : {}} />
                    </Head.LoginBtn>
                </Head.SearchLoginBox>
            </Head.HeaderInnerBox>

            {/* 메뉴창 */}
            <Head.MenuContainer ref={Menu}>
                <Head.MenuBox>
                    <Head.Cate to="/finder" onClick={onoffMenu}>
                        <Head.CateImageTr />
                        여행지 찾기
                    </Head.Cate>

                    <Head.Cate to="/watch" onClick={onoffMenu}>
                        <Head.CateImageList />
                        구경하기
                    </Head.Cate>

                    <Head.Cate to="/regi-story" onClick={onoffMenu}>
                        <Head.CateImageAdd />
                        글쓰기
                    </Head.Cate>

                    <Head.Cate to="/service" onClick={onoffMenu}>
                        <Head.CateImageCus />
                        고객센터
                    </Head.Cate>
                </Head.MenuBox>
            </Head.MenuContainer>

            {/* 검색창 */}
            <Head.SearchContainer ref={Search}>
                <Head.SearchArea>
                    <Head.SearchAreaLogoBox>
                        MY2
                        <Head.PositionLink to="/" onClick={ScrollTop} />
                    </Head.SearchAreaLogoBox>

                    <Head.SearchAreaPostBox>
                        <Head.SearchAreaInput placeholder="검색어를 입력하세요" />
                        <Head.SearchAreaSubmit />
                    </Head.SearchAreaPostBox>

                    <Head.SearchAreaClose onClick={onoffSearch} />
                </Head.SearchArea>
            </Head.SearchContainer>
        </Head.HeaderContainer>
    );

}


export default Header;