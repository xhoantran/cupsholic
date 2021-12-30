import Image from "next/image";
import styled from "styled-components";
import FitlerIcon from "../Icon/Filter";
import { BPMedium } from "../Layout/BreakPoint";

const ProductWrapper = styled.div`
  max-width: 100%;
  width: 100%;

  @media only screen and (min-width: ${BPMedium}) {
    max-width: 990px;
  }
`;
const ProductContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #fff;
`;

export const ShopRightSidebarContainer = (props) => {
  return (
    <>
      <ProductWrapper>
        <div>
          <ProductContainer>{props.children}</ProductContainer>
        </div>
      </ProductWrapper>
    </>
  );
};

const ContentTitle = styled.h1`
  font-family: Jost;
  line-height: 1;
  font-size: 1.75rem;
  margin-top: 0;
  margin-bottom: 0.5rem;

  @media print, screen and (min-width: 66.75em) {
    font-size: 3rem;
  }
`;
const ContentFilter = styled.div`
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1;
`;
const ContentFilterRow = styled.div`
  max-width: none;
  margin-right: -0.9375rem;
  margin-left: -0.9375rem;
  background-size: cover;
  align-items: center;
  display: flex;
  flex-flow: row wrap;
`;
const ContentFilterCol1 = styled.div`
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  min-width: 0;
  flex: 0 0 50%;
  max-width: 50%;

  @media print, screen and (min-width: 48em) and (max-width: 66.75em) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
const ContentFilterCol2 = styled.div`
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  min-width: 0;
  flex: 0 0 50%;
  max-width: 50%;
  text-align: right;

  @media print, screen and (min-width: 48em) and (max-width: 66.75em) {
    flex: 0 0 75%;
    max-width: 75%;
  }
`;
const ContentFilterLink = styled.a`
  @media only screen and (min-width: ${BPMedium}) {
    display: none;
  }

  font-size: 14px;
  font-weight: 500;

  &:hover {
    color: #fecdab;
  }

  & > svg {
    margin-right: 5px;
  }
`;
const ContentSorting = styled.form`
  display: inline-flex;
`;
const ContentSortingSelect = styled.select`
  padding: 0 15px 0 0;
  border: 0;
  margin: 0;
  height: 16px;
  line-height: 16px;
  font-size: 14px;
  background-position: 100% 6px;
  ouitline: none;
  cursor: pointer;

  appearance: none;
  border-radius: 6px;
  color: #000;
  font-weight: 400;
  background: #fff
    url(https://33esog1b5uudrsor3485evx1-wpengine.netdna-ssl.com/wp-content/themes/overline/assets/img/select_arrow.png)
    calc(100% - 5px) 5px no-repeat;
  background-size: 7px 4px;
  position: relative;
`;
const ProductList = styled.ul`
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  min-width: 100%;
  margin: 0 0 30px;
  display: flex;
  flex-wrap: wrap;
`;
const ProductItem = styled.li`
  display: flex;
  border: 1px solid #000;
  margin: -1px 0 0 -1px;
  text-align: left;
  min-width: 0;
  flex: 0 0 50%;
  max-width: 50%;

  @media print, screen and (min-width: 66.75em) {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }
`;

const InnerProductWrapper = styled.div`
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
  position: relative;
`;
const ProductInnerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;

  @media (min-width: ${BPMedium}) {
    padding: 25px;
  }
`;
const ProductName = styled.h2`
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 2px;
  line-height: 1.4;

  &:hover {
    color: #eb9a72;
  }
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
  margin: 12px 0 0;
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
  border: 1px solid #000;
  color: #000;
  border-radius: 0;
  font-size: 11px;
  height: 30px;
  line-height: 28px;
  padding: 0 14px;
  text-transform: uppercase;

  &:hover {
    background: #000;
    color: #fff;
  }
`;
const ProductThumbnailHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-position: center;
`;

const ProductInnerWrapper = ({ data }) => {
  const { id, name, price, image } = data;
  return (
    <>
      <InnerProductWrapper>
        <ProductThumbnail>
          <ProductThumbnailLink>
            {image && (
              <>
                <Image
                  loader={() => image}
                  src={image}
                  width={640}
                  height={640}
                />
                <ProductThumbnailHover className="transition-cubic-bezier">
                  <Image
                    loader={() => image}
                    src={image}
                    width={640}
                    height={640}
                  />
                </ProductThumbnailHover>
              </>
            )}
          </ProductThumbnailLink>
        </ProductThumbnail>
        <ProductInnerContent>
          <ProductName className="transition-cubic-bezier">{name}</ProductName>
          <ProductPrice>
            <span>$</span>
            <ProductAmount>{price}</ProductAmount>
          </ProductPrice>
          <AddToCartContainer>
            <AddToCartButton className="transition-cubic-bezier">
              Add to cart
            </AddToCartButton>
          </AddToCartContainer>
        </ProductInnerContent>
      </InnerProductWrapper>
    </>
  );
};

const Product = ({ products, onOpenFilter }) => {
  return (
    <>
      <header>
        <ContentTitle>Shop</ContentTitle>
        <div>
          <p>
            Buy online, drive up, and get your order in store or curbside in 2
            hours or less!
          </p>
        </div>
      </header>
      <ContentFilter>
        <ContentFilterRow>
          <ContentFilterCol1>
            <ContentFilterLink
              className="transition-cubic-bezier"
              onClick={onOpenFilter}
            >
              <FitlerIcon /> Filter
            </ContentFilterLink>
          </ContentFilterCol1>
          <ContentFilterCol2>
            <ContentSorting>
              <ContentSortingSelect>
                <option value="">Default sort</option>
                <option value="">By popularity</option>
                <option value="">By price: low to high</option>
                <option value="">By price: high to low</option>
              </ContentSortingSelect>
            </ContentSorting>
          </ContentFilterCol2>
        </ContentFilterRow>
      </ContentFilter>
      <ProductList>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <ProductInnerWrapper data={product} />
          </ProductItem>
        ))}
      </ProductList>
    </>
  );
};

export default Product;
