import * as Pro from "./styles/ProductListStyle";

function ProductList({ title, data }) {
    let output = data.map((v, i) => {
        return <Pro.Product key={i} />
    });


    return (
        <Pro.ProductListContainer>
            <Pro.ProTitleBox>
                <Pro.ProTitle>{title}</Pro.ProTitle>
                <Pro.ProTitleLine />
            </Pro.ProTitleBox>

            <Pro.ProContainer>
                {output}
            </Pro.ProContainer>
        </Pro.ProductListContainer>
    );

}


export default ProductList;