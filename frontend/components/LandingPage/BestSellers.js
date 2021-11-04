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

const BestSellers = ({ bestSellers, numsItem }) => {
  return (
    numsItem !== 0 && (
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
            {bestSellers.map((product) => (
              <Product key={product.id} data={product} numsItem={numsItem} />
            ))}
          </ProductGridContainer>
        </ProductWrapper>
        {/* ------------------------------------------------- */}
        <Gap height="20px" />
        {/* ------------------------------------------------- */}
        <AnimatedButton text="View All Best Sellers" />
      </>
    )
  );
};

export default BestSellers;
