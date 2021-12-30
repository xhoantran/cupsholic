import Head from "next/head";
import ContentContainer, {
  ContentWrapper,
} from "../components/Layout/Container";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Subheader from "../components/Layout/Subheader";
import Wrapper from "../components/Layout/Wrapper";
import OverlayContainer from "../components/Layout/OverlayContainer";
import { useState } from "react";
import BreadCrumb from "../components/Layout/BreadCrumb";
import ShopContainer from "../components/Shop/Container";
import ShopSidebar from "../components/Shop/Sidebar";
import ShopProduct, {
  ShopRightSidebarContainer,
} from "../components/Shop/Product";
import Pagination from "../components/Shop/Pagination";

const Shop = ({ productsProps, filterProps }) => {
  const { products, numsItem, currentPage } = productsProps;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function handleOpenMenu() {
    setIsOpenMenu(true);
  }
  function handleCloseMenu() {
    setIsOpenMenu(false);
  }
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  function handleOpenFilter() {
    setIsOpenFilter(true);
  }
  function handleCloseFilter() {
    setIsOpenFilter(false);
  }
  return (
    <>
      <Head>
        <title>Cupsholic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Subheader />
        <Header onOpenMenu={handleOpenMenu} />
        <ContentWrapper>
          <BreadCrumb />
          <ContentContainer>
            <ShopContainer>
              <ShopSidebar filterProps={filterProps} />
              <ShopRightSidebarContainer>
                <ShopProduct
                  products={products}
                  onOpenFilter={handleOpenFilter}
                />
                <Pagination numsItem={numsItem} currentPage={currentPage} />
              </ShopRightSidebarContainer>
            </ShopContainer>
          </ContentContainer>
        </ContentWrapper>
        <Footer />
        <OverlayContainer
          isOpenMenu={isOpenMenu}
          isOpenFilter={isOpenFilter}
          onClose={() => {
            handleCloseMenu();
            handleCloseFilter();
          }}
        />
      </Wrapper>
    </>
  );
};

export async function getServerSideProps(context) {
  const { page } = context.query;
  const product = await fetch(
    `http://localhost:8000/api/products/?page=${page ? page : 1}`
  );
  const categories = await fetch(`http://localhost:8000/api/categories/`);
  const color = await fetch(`http://localhost:8000/api/color/`);
  const productData = await product.json();
  const categoriesData = await categories.json();
  const colorData = await color.json();
  if (!productData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      productsProps: {
        products: productData.results,
        numsItem: productData.count,
        currentPage: page ? parseInt(page) : 1,
      },
      filterProps: {
        categories: categoriesData,
        colors: colorData,
      },
    },
  };
}

export default Shop;
