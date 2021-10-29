import styled from "styled-components";
import SessionHeader from "../SessionHeader";
import Gap from "../Gap";
import Image from "next/image";

const BestSellersDecription = styled.p`
  text-align: center;
`;
const ProductWrapper = styled.div`
  text-align: center;
`;
const ProductGridContainer = styled.ul`
  border-top: 1 px solid transparent;
  border-left: 1 px solid transparent;
  min-width: 100%;
  margin: 0 0 30 px;
  display: flex;

  flex-wrap: wrap;
  padding: 0;
  background-clip: padding-box;
  list-style-type: disc;

  @media (max-width: 480px) {
    display: block;
  }
`;
const ProductGridItem = styled.li`
  font-size: 0.75rem;
  display: flex;
  flex: 1 0 25%;
  max-width: 25%;
  border: 1px solid #000;
  margin: -1px 0 0 -1px !important;
  text-align: left;

  float: none;
  width: auto;
  position: relative;
  list-style: none;

  line-height: 1.6;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: 0 !important;
`;
const ProductThumbnail = styled.figure`
  border-bottom: 1px solid #000;
  position: relative;
  overflow: hidden;
`;
const ProductThumbnailLink = styled.a`
  display: block;
  line-height: 0;
  color: #000;
`;
const ProductThumbnailImageContainer = styled.div`
  text-decoration: none;
  display: block;
  position: relative;
`;

const BestSellers = ({ data }) => {
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
          {data.map((product) => (
            <ProductGridItem>
              <ProductContainer>
                <ProductThumbnail>
                  <ProductThumbnailLink href="#">
                    <ProductThumbnailImageContainer>
                      <Image
                        loader={() => figureSrc}
                        src={figureSrc}
                        width={86}
                        height={92}
                      />
                    </ProductThumbnailImageContainer>
                  </ProductThumbnailLink>
                </ProductThumbnail>
              </ProductContainer>
            </ProductGridItem>
          ))}
        </ProductGridContainer>
      </ProductWrapper>
    </>
  );
};

export default BestSellers;
