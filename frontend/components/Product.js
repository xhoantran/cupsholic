import styled from "styled-components";
import Image from "next/image";

const ProductGridItem = styled.li`
  font-size: 0.75rem;
  display: flex;
  flex: 1 0 ${(props) => 100 / props.numsItem}%;
  max-width: ${(props) => 100 / props.numsItem}%;
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
const ProductInnerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15 px;
`;
const ProductName = styled.h2`
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 2 px;
  line-height: 1.4;
`;
const ProductPrice = styled.div`
  margin-bottom: auto;
  margin-left: 0;
  display: block;
  color: #000;
  font-size: 13px;
`;
const ProductAmount = styled.span`
  color: #000;
  text-decoration: none;
  display: inline-flex;
  vertical-align: middle;
  font-weight: 400;
  font-size: 13px;
  line-height: 1;
`;
const AddToCartContainer = styled.div`
  margin: 12 px 0 0;
  line-height: 22px;
`;
const AddToCartButton = styled.a`
  overflow-wrap: break-word;
  box-shadow: none;
  cursor: pointer;

  position: relative;
  z-index: 1;

  word-break: break-word;
  white-space: normal;
  margin: 0 auto;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  background: #fff;
  border: 1 px solid #000;
  color: #000;
  border-radius: 0;
  font-size: 11px;
  height: 30 px;
  line-height: 28px;
  padding: 0 14 px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Product = ({ data, numsItem }) => {
  const { id, name, price, image } = data;
  return (
    <ProductGridItem numsItem={numsItem}>
      <ProductContainer>
        <ProductThumbnail>
          <ProductThumbnailLink href="#">
            <ProductThumbnailImageContainer>
              <Image
                loader={() => image}
                src={image}
                width={640}
                height={640}
              />
            </ProductThumbnailImageContainer>
          </ProductThumbnailLink>
        </ProductThumbnail>
        <ProductInnerContent>
          <ProductName>{name}</ProductName>
          <ProductPrice>
            <span>$</span>
            <ProductAmount>{price}</ProductAmount>
          </ProductPrice>
          <AddToCartContainer>
            <AddToCartButton>Add to cart</AddToCartButton>
          </AddToCartContainer>
        </ProductInnerContent>
      </ProductContainer>
    </ProductGridItem>
  );
};

export default Product;
