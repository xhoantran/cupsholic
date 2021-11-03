import Head from "next/head";
import { useState } from "react";
import Gap from "../components/Gap";
import Attract from "../components/LandingPage/Attract";
import BestSellers from "../components/LandingPage/BestSellers";
import LimitSale from "../components/LandingPage/LimitSales";
import NewArrivals from "../components/LandingPage/NewArrivals";
import ContentContainer, {
  ContentWrapper,
} from "../components/Layout/Container";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import OverlayContainer from "../components/Layout/OverlayContainer";
// import NewBlog from "../components/LandingPage/NewBlog";
import ScrollToTop from "../components/Layout/ScrollToTop";
import Subheader from "../components/Layout/Subheader";
import Wrapper from "../components/Layout/Wrapper";

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
