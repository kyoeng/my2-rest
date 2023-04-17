import * as Banner from './styles/BannerStyle';
import { useRef } from 'react';


function Banners() {
    // const [reRender, setReRender] = useState(false);    // ref 변수를 위해 강제 리렌더링을 위한 변수
    const banner = useRef([]);      // Banner 태그를 담은 배열
    // const num = useRef(0);          // Banner 번호를 위한 변수
    // const autoSet = useRef();       // setInterval함수를 담기위한 변수

    // ref 변수에 제대로 담기 위한 리렌더링 코드
    // useEffect(() => { setReRender(true); }, []);

    // console.log(reRender);

    // // 배너 슬라이드 함수
    // function autoSlide() {
    //     autoSet.current = setInterval(() => {
    //         banner.current[num.current].style.visibility = 'hidden';
    //         banner.current[num.current].style.opacity = '0';

    //         num.current = (num.current + 1) % banner.current.length;

    //         banner.current[num.current].style.visibility = 'visible';
    //         banner.current[num.current].style.opacity = '1';
    //     }, 10000);
    // }

    // // 배너 슬라이드 on
    // if (reRender) {
    //     console.log("hi");
    //     autoSlide();
    // }

    // // 배너 슬라이드 멈추기
    // function clearSlide() { clearInterval(autoSet.current); }

    return (
        <Banner.BannerContainer>
            <Banner.BannerList>
                <Banner.Banners ref={(e) => banner.current[0] = e}
                    style={{ background: 'url(./images/staticImages/banner_travel.jpg) center/cover' }}>
                </Banner.Banners>

                <Banner.Banners ref={(e) => banner.current[1] = e}
                    style={{ background: 'url(./images/staticImages/banner_beach.png) center/cover', visibility: 'visible', opacity: '1' }}>
                </Banner.Banners>

                <Banner.Banners ref={(e) => banner.current[2] = e}
                    style={{ background: 'url(./images/staticImages/banner_web.png) center/cover' }}>
                </Banner.Banners>
            </Banner.BannerList>

            <Banner.BannerComment to="/">
                여행 구경가기
            </Banner.BannerComment>
        </Banner.BannerContainer>
    );

}

export default Banners;