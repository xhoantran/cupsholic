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
import ShopProduct from "../components/Shop/ShopProduct";

export default function Shop() {
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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Subheader />
        <Header onOpenMenu={handleOpenMenu} />
        <ContentWrapper>
          <BreadCrumb />
          <ContentContainer>
            <ShopProduct />
          </ContentContainer>
        </ContentWrapper>
        <Footer />
        <OverlayContainer isOpenMenu={isOpenMenu} onClose={handleCloseMenu} />
      </Wrapper>
    </>
  );
}
