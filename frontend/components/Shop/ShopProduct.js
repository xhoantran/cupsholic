import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowDownIcon from "../Icon/ArrowDown";
import FitlerIcon from "../Icon/Filter";
import { BPMedium } from "../Layout/BreakPoint";

const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${BPMedium}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const ShopSidebarWrapper = styled.div`
  flex-shrink: 0;
  display: none;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: ${BPMedium}) {
    display: flex;
    max-width: 300px;
    padding-right: 45px;
  }
`;

const SideBarContainer = styled.div`
  @media only screen and (min-width: ${BPMedium}) {
    position: sticky;
    top: 40px;
  }
`;
const SidebarWidgetContainer = styled.div`
  margin-bottom: 25px;
  padding-bottom: 23px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
`;

const SidebarWidgetTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1;
  color: #000;
`;
const SidebarWidgetList = styled.ul`
  list-style: none;
`;
const SidebarWidgetItem = styled.li`
  margin-bottom: 5px;
`;
const SidebarWidgetItemLink = styled.a`
  color: #000;
`;

const ShopCategory = () => {
  return (
    <SidebarWidgetContainer>
      <SidebarWidgetTitle>Categories</SidebarWidgetTitle>
      <SidebarWidgetList>
        <SidebarWidgetItem>
          <SidebarWidgetItemLink>Whine Cup</SidebarWidgetItemLink>
        </SidebarWidgetItem>
        <SidebarWidgetItem>
          <SidebarWidgetItemLink>Cute Cup</SidebarWidgetItemLink>
        </SidebarWidgetItem>
        <SidebarWidgetItem>
          <SidebarWidgetItemLink>Coffee Cup</SidebarWidgetItemLink>
        </SidebarWidgetItem>
        <SidebarWidgetItem>
          <SidebarWidgetItemLink>Random Cup</SidebarWidgetItemLink>
        </SidebarWidgetItem>
        <SidebarWidgetItem>
          <SidebarWidgetItemLink>Whine Cup</SidebarWidgetItemLink>
        </SidebarWidgetItem>
      </SidebarWidgetList>
    </SidebarWidgetContainer>
  );
};

const ItemFilterContainer = styled.li`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const ItemFilterFillterLink = styled.a`
  display: block;
  position: relative;
  padding-left: 25px;
  color: #000;

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -7px;
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid #000;
    color: #fff;
  }

  &.chosen::before {
    box-shadow: inset 0 0 0 1px;
    background: #000;
  }
`;

const ShopColorFilter = () => {
  return (
    <SidebarWidgetContainer>
      <SidebarWidgetTitle>Fillter by Color</SidebarWidgetTitle>
      <SidebarWidgetList>
        <ItemFilterContainer>
          <ItemFilterFillterLink>Black</ItemFilterFillterLink>
        </ItemFilterContainer>
        <ItemFilterContainer>
          <ItemFilterFillterLink>Red</ItemFilterFillterLink>
        </ItemFilterContainer>
        <ItemFilterContainer>
          <ItemFilterFillterLink>Blue</ItemFilterFillterLink>
        </ItemFilterContainer>
      </SidebarWidgetList>
    </SidebarWidgetContainer>
  );
};

const SidebarLastWidgetContainer = styled.div`
  margin-bottom: 25px;
  font-size: 14px;
  border-bottom: 0;
`;

const ShopSizeFilter = () => {
  return (
    <SidebarLastWidgetContainer>
      <SidebarWidgetTitle>Fillter by Size</SidebarWidgetTitle>
      <SidebarWidgetList>
        <ItemFilterContainer>
          <ItemFilterFillterLink>S</ItemFilterFillterLink>
        </ItemFilterContainer>
        <ItemFilterContainer>
          <ItemFilterFillterLink>M</ItemFilterFillterLink>
        </ItemFilterContainer>
        <ItemFilterContainer>
          <ItemFilterFillterLink>L</ItemFilterFillterLink>
        </ItemFilterContainer>
        <ItemFilterContainer>
          <ItemFilterFillterLink>XL</ItemFilterFillterLink>
        </ItemFilterContainer>
      </SidebarWidgetList>
    </SidebarLastWidgetContainer>
  );
};

const ShopContentWrapper = styled.div`
  max-width: 100%;
  width: 100%;

  @media only screen and (min-width: ${BPMedium}) {
    max-width: 990px;
  }
`;
const ShopContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #fff;
`;
const ShopContentTitle = styled.h1`
  font-family: Jost;
  line-height: 1;
  font-size: 1.75rem;
  margin-top: 0;
  margin-bottom: 0.5rem;

  @media print, screen and (min-width: 66.75em) {
    font-size: 3rem;
  }
`;
const ShopContentFilter = styled.div`
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1;
`;
const ShopContentFilterRow = styled.div`
  max-width: none;
  margin-right: -0.9375rem;
  margin-left: -0.9375rem;
  background-size: cover;
  align-items: center;
  display: flex;
  flex-flow: row wrap;
`;
const ShopContentFilterCol1 = styled.div`
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
const ShopContentFilterCol2 = styled.div`
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
const ShopContentFilterLink = styled.a`
  font-size: 14px;
  font-weight: 500;

  & > svg {
    margin-right: 5px;
  }
`;
const ShopContentSorting = styled.form`
  display: inline-flex;
`;
const ShopContentSortingSelect = styled.select`
  padding: 0 10px 0 0;
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
    calc(100% - 15px) 20px no-repeat;
  background-size: 7px 4px;
  position: relative;
`;
const ArrowDownIconWrapper = styled.div`
  margin-left: 5px;
  padding-bottom: 4px;
  cursor: pointer;
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

const ProductWrapper = styled.div`
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
      <ProductWrapper>
        <ProductThumbnail>
          <ProductThumbnailLink>
            <Image loader={() => image} src={image} width={640} height={640} />
            <ProductThumbnailHover className="transition-cubic-bezier">
              <Image
                loader={() => image}
                src={image}
                width={640}
                height={640}
              />
            </ProductThumbnailHover>
          </ProductThumbnailLink>
        </ProductThumbnail>
        <ProductInnerContent>
          <ProductName className="transition-cubic-bezier">{name}</ProductName>
          <ProductPrice>
            <span>$</span>
            <ProductAmount>{price}</ProductAmount>
          </ProductPrice>
          <AddToCartContainer>
            <AddToCartButton>Add to cart</AddToCartButton>
          </AddToCartContainer>
        </ProductInnerContent>
      </ProductWrapper>
    </>
  );
};

const ShopContent = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/?bestseller=true")
      .then((response) => {
        setProducts(response.data.results);
      });
  }, []);

  return (
    <div>
      <ShopContentContainer>
        <header>
          <ShopContentTitle>Shop</ShopContentTitle>
          <div>
            <p>
              Buy online, drive up, and get your order in store or curbside in 2
              hours or less!
            </p>
          </div>
        </header>
        <ShopContentFilter>
          <ShopContentFilterRow>
            <ShopContentFilterCol1>
              <ShopContentFilterLink>
                <FitlerIcon /> Filter
              </ShopContentFilterLink>
            </ShopContentFilterCol1>
            <ShopContentFilterCol2>
              <ShopContentSorting>
                <ShopContentSortingSelect>
                  <option value="">Default sort</option>
                  <option value="">Sort by popularity</option>
                  <option value="">Sort by price: low to high</option>
                  <option value="">Sort by price: high to low</option>
                </ShopContentSortingSelect>
                <ArrowDownIconWrapper>
                  <ArrowDownIcon />
                </ArrowDownIconWrapper>
              </ShopContentSorting>
            </ShopContentFilterCol2>
          </ShopContentFilterRow>
        </ShopContentFilter>
        <ProductList>
          {products.map((product) => (
            <ProductItem key={product.id}>
              <ProductInnerWrapper data={product} />
            </ProductItem>
          ))}
        </ProductList>
      </ShopContentContainer>
    </div>
  );
};

const ShopProduct = () => {
  return (
    <ShopContainer>
      <ShopSidebarWrapper>
        <SideBarContainer>
          <ShopCategory />
          <ShopColorFilter />
          <ShopSizeFilter />
        </SideBarContainer>
      </ShopSidebarWrapper>
      <ShopContentWrapper>
        <ShopContent />
      </ShopContentWrapper>
    </ShopContainer>
  );
};

export default ShopProduct;
