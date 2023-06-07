import { useRef, useState, useEffect, useLayoutEffect } from "react";
import * as Head from "./styles/HeaderStyle";
import ScrollTop from './commons/ScrollTop';
import { toSpringBoot } from "./commons/Axioses";
import { getCookie, removeCookie } from "./commons/Cookie";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const MenuBtn = useRef();                           // 메뉴 버튼에 대한 변수
    const Menu = useRef();                              // 메뉴창에 대한 변수
    const LoginedMenu = useRef();                       // 로그인 후 아코디언 메뉴

    const [menuOnoff, setMenuOnoff] = useState(false);          // 메뉴 팝업이 나오고 안나오고를 결정할 변수
    const [loginedOnoff, setLoginedOnoff] = useState(false);    // 로그인 후 아코디언 메뉴를 나타내기를 결정할 변수
    const [resize, setResize] = useState(window.innerWidth);    // 브라우저 너비 저장할 변수

    // 로그인 상태 여부에 관한 변수
    const [login, setLogin] = useState(false);
    const userImage = useRef("");
    const navi = useNavigate();
    const location = useLocation();


    // 로그인 상태 확인 ( url 바뀔때 마다 실행 ) ====
    useLayoutEffect(() => {
        if (getCookie("token") !== undefined && getCookie("image") !== undefined) {
            userImage.current = getCookie("image");
            setLogin(true);
        } else {
            setLogin(false);
        }
    }, [location.pathname]);



    // 브라우저 너비 저장 변수 변경 함수 ====
    function handleResize() { setResize(window.innerWidth); }



    // Resize 시 적용할 이벤트 ====
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);



    // 메뉴 버튼 이벤트 ====
    function onoffMenu() {
        if (menuOnoff) {
            // 닫히는 이벤트
            if (window.innerWidth < 1024) {
                MenuBtn.current.style.background = 'url(./images/icons/NavBtn_blue.png) center/cover';
            } else {
                MenuBtn.current.style.background = 'url(./images/icons/NavBtn_white.png) center/cover';
            }
        } else {
            // 열리는 이벤트
            if (window.innerWidth < 1024) {
                MenuBtn.current.style.background = 'url(./images/icons/close_blue.png) center/60% no-repeat';
            } else {
                MenuBtn.current.style.background = 'url(./images/icons/close_white.png) center/60% no-repeat';
            }
        }

        if (loginedOnoff) {
            setLoginedOnoff(false);
        }

        setMenuOnoff(!menuOnoff);
    }

    // 메뉴 선택 시 이벤트 ====
    function selectMenu() {
        onoffMenu();
        ScrollTop();
    }



    // 로그인 후 계정관련 버튼 이벤트 ====
    function loginedBtnEvenet() {
        if (menuOnoff) {
            setMenuOnoff(false);
        }

        setLoginedOnoff(!loginedOnoff)
    }



    // 로그인을 필요로 하는 페이지의 버튼 이벤트 ====
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
            }

            ScrollTop();
        }).catch((err) => {
            console.log(err);
        });

        setLoginedOnoff(false);
    }



    // 로그아웃 버튼 이벤트 ====
    function logoutBtnEvent() {
        removeCookie("token");
        removeCookie("image");
        removeCookie("id");
        setLoginedOnoff(false);
        setLogin(false);
        navi("/", { replace: true });
        ScrollTop();
        window.location.reload();
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
                    <Head.LoginBtn style={login ? { background: "none", backgroundColor: "white", borderRadius: "50%" } : {}}>
                        <Head.NonePosiLink to="/login" onClick={ScrollTop}
                            style={login ? { display: "none" } : { display: "block" }} />

                        <Head.LoginedBtn onClick={loginedBtnEvenet}
                            style={login ? { display: "block", background: `url(${getCookie("image")}) center/cover` } : { display: "none" }} />
                    </Head.LoginBtn>
                </Head.SearchLoginBox>
            </Head.HeaderInnerBox>



            {/* 메뉴창 */}
            <Head.MenuContainer ref={Menu} style={menuOnoff ? { display: "flex" } : { display: "none" }}>
                <Head.MenuBox>
                    <Head.Cate to="/finder" onClick={selectMenu}>
                        <Head.CateImageTr />
                        여행지 찾기
                    </Head.Cate>

                    <Head.Cate to="/story" onClick={selectMenu}>
                        <Head.CateImageList />
                        스토리 보기
                    </Head.Cate>

                    <Head.Cate to={login ? "/regi-story" : "/login"} onClick={selectMenu}>
                        <Head.CateImageAdd />
                        스토리 작성
                    </Head.Cate>

                    <Head.Cate to="/board" onClick={selectMenu}>
                        <Head.CateImageBoard />
                        게시판으로
                    </Head.Cate>
                </Head.MenuBox>
            </Head.MenuContainer>



            {/* 로그인 후 나타낼 아코디언 메뉴(계정 부분) */}
            <Head.LoginedMenuContainer ref={LoginedMenu} style={loginedOnoff ? { display: "flex" } : { display: "none" }}>
                <Head.LoginedMenus to="/mypage" onClick={loginedPage}>
                    마이페이지
                </Head.LoginedMenus>

                <Head.LogoutBtn onClick={logoutBtnEvent}>로그아웃</Head.LogoutBtn>
            </Head.LoginedMenuContainer>
        </Head.HeaderContainer>
    );

}


export default Header;