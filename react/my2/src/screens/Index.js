import ProductList from "../components/ProductList";
import * as Idx from "../components/styles/IndexStyle";

const Index = () => {
    const testData = [1, 2, 3, 4];
    const testData2 = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <Idx.IndexContainer>
            {/* 배너 부분 */}
            <Idx.BannerContainer>

            </Idx.BannerContainer>

            {/* 신상품 */}
            <ProductList title="새로 등록된 신상품" data={testData} />

            {/* 많이 찾는 상품 */}
            <ProductList title="가장 많이 찾는 상품" data={testData2} />

            {/* 추천 여행지 */}
            <Idx.RecommendContainer>

            </Idx.RecommendContainer>
        </Idx.IndexContainer>
    );

}


export default Index;