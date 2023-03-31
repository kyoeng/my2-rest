import { useRef, useState, useEffect } from "react";
import * as Head from "./styles/HeaderStyle";

const Header = () => {
    const MenuBtn = useRef();                           // 메뉴 버튼에 대한 변수
    const Menu = useRef();                              // 메뉴창에 대한 변수
    const [menuOnoff, setMenuOnoff] = useState(false);  // 메뉴 팝업이 나오고 안나오고를 결정한 변수
    const [resize, setResize] = useState(window.innerWidth);    // 브라우저 너비 저장할 변수

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
            if (window.innerWidth < 1024) {
                MenuBtn.current.style.background = 'url(./images/icons/NavBtn_blue.png) center/cover';
            } else {
                MenuBtn.current.style.background = 'url(./images/icons/NavBtn_white.png) center/cover';
            }
            Menu.current.style.visibility = 'hidden';
            Menu.current.style.opacity = '0';
        } else {
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
                <Head.NavBtn onClick={onoffMenu} ref={MenuBtn}
                    style={resize < 1024 && menuOnoff ? { background: 'url(./images/icons/close_blue.png) center/60% no-repeat' } :
                        resize < 1024 && !menuOnoff ? { background: 'url(./images/icons/NavBtn_blue.png) center/cover' } :
                            resize >= 1024 && menuOnoff ? { background: 'url(./images/icons/close_white.png) center/60% no-repeat' } :
                                resize >= 1024 && !menuOnoff ? { background: 'url(./images/icons/NavBtn_white.png) center/cover' } : {}} />

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
                <Head.MenuBox>
                    <Head.Cate>
                        <Head.CateImageTr />
                        여행지 찾기
                    </Head.Cate>

                    <Head.Cate>
                        <Head.CateImageList />
                        구경하기
                    </Head.Cate>

                    <Head.Cate>
                        <Head.CateImageAdd />
                        글쓰기
                    </Head.Cate>

                    <Head.Cate>
                        <Head.CateImageCus />
                        고객센터
                    </Head.Cate>
                </Head.MenuBox>
            </Head.MenuContainer>
        </Head.HeaderContainer>
    );

}


export default Header;