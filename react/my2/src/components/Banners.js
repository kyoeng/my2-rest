import * as Banner from './styles/BannerStyle';
import { useRef, useEffect, useState } from 'react';


function Banners() {
    const [reRender, setReRender] = useState(false);    // ref 변수를 위해 강제 리렌더링을 위한 변수
    const banner = useRef([]);      // Banner 태그를 담은 배열
    const btns = useRef([]);        // Btns 태그를 담은 배열
    const num = useRef(0);          // Banner 번호를 위한 변수
    const autoSet = useRef();       // setInterval함수를 담기위한 변수

    // ref 변수에 제대로 담기 위한 리렌더링 코드
    useEffect(() => { setReRender(true); }, []);

    // 배너 슬라이드 함수
    function autoSlide() {
        autoSet.current = setInterval(() => {
            banner.current[num.current].style.visibility = 'hidden';
            banner.current[num.current].style.opacity = '0';
            btns.current[num.current].style.opacity = '0.3';

            num.current = (num.current + 1) % banner.current.length;

            banner.current[num.current].style.visibility = 'visible';
            banner.current[num.current].style.opacity = '1';
            btns.current[num.current].style.opacity = '1';
        }, 8000);;
    }

    // 배너 슬라이드 버튼 이벤트
    function clickBtns(i) {
        banner.current[num.current].style.visibility = 'hidden';
        banner.current[num.current].style.opacity = '0';
        btns.current[num.current].style.opacity = '0.3';

        num.current = i;

        banner.current[num.current].style.visibility = 'visible';
        banner.current[num.current].style.opacity = '1';
        btns.current[num.current].style.opacity = '1';
    }

    // 배너 슬라이드 on
    if (reRender) autoSlide();

    // 배너 슬라이드 멈추기
    function clearSlide() { clearInterval(autoSet.current); }

    return (
        <Banner.BannerContainer>
            <Banner.BannerList onMouseOver={clearSlide} onMouseLeave={autoSlide}>
                <Banner.Banners ref={(e) => banner.current[0] = e}
                    style={{ background: 'url(./images/staticImages/banner_sea.jpg) center/cover', visibility: 'visible', opacity: '1' }}>
                    <Banner.BannerComment to="/">
                        여행지 보러가기
                    </Banner.BannerComment>
                </Banner.Banners>

                <Banner.Banners ref={(e) => banner.current[1] = e}
                    style={{ background: 'url(./images/staticImages/banner_camping.jpg) center/cover' }}>
                    <Banner.BannerComment to="/">
                        여행지 보러가기
                    </Banner.BannerComment>
                </Banner.Banners>

                <Banner.Banners ref={(e) => banner.current[2] = e}
                    style={{ background: 'url(./images/staticImages/banner_moun.jpg) center/cover' }}>
                    <Banner.BannerComment to="/">
                        여행지 보러가기
                    </Banner.BannerComment>
                </Banner.Banners>
            </Banner.BannerList>

            <Banner.BtnsContainer>
                <Banner.Btns onClick={() => clickBtns(0)} ref={(e) => btns.current[0] = e} style={{ opacity: '1' }} />
                <Banner.Btns onClick={() => clickBtns(1)} ref={(e) => btns.current[1] = e} />
                <Banner.Btns onClick={() => clickBtns(2)} ref={(e) => btns.current[2] = e} />
            </Banner.BtnsContainer>
        </Banner.BannerContainer>
    );

}

export default Banners;