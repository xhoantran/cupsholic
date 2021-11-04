import Head from "next/head";
import ContentContainer, {
  ContentWrapper,
} from "../../components/Layout/Container";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Subheader from "../../components/Layout/Subheader";
import Wrapper from "../../components/Layout/Wrapper";
import OverlayContainer from "../../components/Layout/OverlayContainer";
import { useState } from "react";
import BreadCrumb from "../../components/Layout/BreadCrumb";
import ShopContainer from "../../components/Shop/Container";
import ShopSidebar from "../../components/Shop/Sidebar";
import ShopProduct, {
  ShopRightSidebarContainer,
} from "../../components/Shop/Product";
import Pagination from "../../components/Shop/Pagination";

const Shop = ({ productsProps }) => {
  const { products, numsItem, currentPage } = productsProps;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function handleOpenMenu() {
    setIsOpenMenu(true);
  }
  function handleCloseMenu() {
    setIsOpenMenu(false);
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
              <ShopSidebar />
              <ShopRightSidebarContainer>
                <ShopProduct products={products} numsItem={numsItem} />
                <Pagination numsItem={numsItem} currentPage={currentPage} />
              </ShopRightSidebarContainer>
            </ShopContainer>
          </ContentContainer>
        </ContentWrapper>
        <Footer />
        <OverlayContainer isOpenMenu={isOpenMenu} onClose={handleCloseMenu} />
      </Wrapper>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const product = await fetch(
    `http://localhost:8000/api/products/${
      slug && slug[0] === "page" && !isNaN(slug[1]) ? `?page=${slug[1]}` : ``
    }`
  );
  const productData = await product.json();
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
        currentPage: slug && !isNaN(slug[1]) ? parseInt(slug[1]) : 1,
      },
    },
  };
}

export default Shop;
