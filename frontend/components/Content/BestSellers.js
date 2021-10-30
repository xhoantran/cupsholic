import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Gap from "../Gap";
import Product from "../Product";
import SessionHeader from "../SessionHeader";

const BestSellersDecription = styled.p`
  text-align: center;
`;
const ProductWrapper = styled.div`
  text-align: center;
`;
const ProductGridContainer = styled.ul`
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  min-width: 100%;
  margin: 0 0 30px;
  display: flex;

  flex-wrap: wrap;
  padding: 0;
  background-clip: padding-box;
  list-style-type: disc;

  @media (max-width: 480px) {
    display: block;
  }
`;

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState({
    products: [],
    numsItems: 0,
  });
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/products/?bestseller=true")
  //     .then((response) => {
  //       console.log(response);
  //       setBestSellers({
  //         products: response.data.results,
  //         numsItems: response.data.count,
  //       });
  //     });
  // }, []);

  return (
    <>
      <SessionHeader fontSize="30px">Best Sellers</SessionHeader>
      <Gap height="5px" />
      <BestSellersDecription>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
        recusandae!
        <br />
        Lorem ipsum dolor sit amet.
      </BestSellersDecription>
      <Gap height="36px" />

      <ProductWrapper>
        <ProductGridContainer>
          {bestSellers.products.map((product) => (
            <Product
              key={product.id}
              data={product}
              numsItems={bestSellers.numsItems}
            />
          ))}
        </ProductGridContainer>
      </ProductWrapper>
    </>
  );
};

export default BestSellers;
