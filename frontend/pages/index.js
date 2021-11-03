import Head from "next/head";
import Attract from "../components/Content/Attract";
import BestSellers from "../components/Content/BestSellers";
import ContentContainer, {
  ContentWrapper,
} from "../components/Content/Container";
import LimitSale from "../components/Content/LimitSales";
import NewArrivals from "../components/Content/NewArrivals";
import Gap from "../components/Gap";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Subheader from "../components/Layout/Subheader";
import Wrapper from "../components/Layout/Wrapper";
// import NewBlog from "../components/Content/NewBlog";
import ScrollToTop from "../components/Layout/ScrollToTop";
import OverlayContainer from "../components/Layout/OverlayContainer";
import { useState } from "react";

export default function Home() {
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Subheader />
        <Header onOpenMenu={handleOpenMenu} />
        <ContentWrapper>
          <ContentContainer>
            <Attract />
            <Gap height="50px" />
            <BestSellers />
            <Gap height="50px" />
            <LimitSale />
            <Gap height="45px" />
            <NewArrivals />
            {/* <NewBlog /> */}
          </ContentContainer>
        </ContentWrapper>
        <Footer />
        <ScrollToTop />
        <OverlayContainer isOpenMenu={isOpenMenu} onClose={handleCloseMenu} />
      </Wrapper>
    </>
  );
}
