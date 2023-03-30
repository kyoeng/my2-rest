import styled from 'styled-components';
import Banners from "../components/Banners";

const Index = () => {

    const IndexContainer = styled.main`
        margin: 90px 0 0;
        @media screen and (max-width: 1024px) {
            margin: 50px 0 0;
        }
    `

    return (
        <IndexContainer>
            {/* 배너 부분 */}
            <Banners />

            {/* 추천 여행지 */}

        </IndexContainer>
    );

}


export default Index;