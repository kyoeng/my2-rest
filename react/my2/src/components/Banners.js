import * as Banner from './styles/BannerStyle';


function Banners() {

    return (
        <Banner.BannerContainer>
            <Banner.BannerList>
                <Banner.Banners style={{ background: 'url(./images/staticImages/banner_sea.jpg) center/cover', visibility: 'visible' }}>
                    <Banner.BannerComment to="/">
                        여행지 보러가기
                    </Banner.BannerComment>
                </Banner.Banners>

                <Banner.Banners style={{ background: 'url(./images/staticImages/banner_camping.jpg) center/cover' }}>
                    <Banner.BannerComment to="/">
                        여행지 보러가기
                    </Banner.BannerComment>
                </Banner.Banners>

                <Banner.Banners style={{ background: 'url(./images/staticImages/banner_moun.jpg) center/cover' }}>
                    <Banner.BannerComment to="/">
                        여행지 보러가기
                    </Banner.BannerComment>
                </Banner.Banners>
            </Banner.BannerList>
        </Banner.BannerContainer>
    );

}

export default Banners;