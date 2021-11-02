import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AnimatedButton from "../AnimatedButton";
import Gap from "../Gap";
import {
  ProductGridContainer,
  ProductWrapper,
} from "../Layout/ProductGridContainer";
import Product from "../Product";
import SessionHeader from "../SessionHeader";

const TitleDecription = styled.p`
  text-align: center;
`;

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState({
    products: [],
    numsItem: 0,
  });
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/?bestseller=true")
      .then((response) => {
        setBestSellers({
          products: response.data.results,
          numsItem: response.data.count,
        });
      });
  }, []);

  return (
    bestSellers.numsItem !== 0 && (
      <>
        <SessionHeader fontSize="30px">Best Sellers</SessionHeader>
        <Gap height="5px" />
        <TitleDecription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
          recusandae!
          <br />
          Lorem ipsum dolor sit amet.
        </TitleDecription>
        {/* ------------------------------------------------- */}
        <Gap height="36px" />
        {/* ------------------------------------------------- */}
        <ProductWrapper>
          <ProductGridContainer>
            {bestSellers.products.map((product) => (
              <Product
                key={product.id}
                data={product}
                numsItem={bestSellers.numsItem}
              />
            ))}
          </ProductGridContainer>
        </ProductWrapper>
        {/* ------------------------------------------------- */}
        <Gap height="20px" />
        {/* ------------------------------------------------- */}
        <AnimatedButton
          text="View All Best Sellers"
          url="/products/bestseller"
        />
      </>
    )
  );
};

export default BestSellers;
