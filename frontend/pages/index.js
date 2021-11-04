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

export default function Home({ bestSellersProps, newArrivalProps }) {
  const { bestSellers, bestSellersItem } = bestSellersProps;
  console.log(newArrivalProps);
  const { newArrival, newArrivalItem } = newArrivalProps;
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
            <BestSellers bestSellers={bestSellers} numsItem={bestSellersItem} />
            <Gap height="50px" />
            <LimitSale />
            <Gap height="45px" />
            <NewArrivals newArrival={newArrival} numsItem={newArrivalItem} />
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

export async function getServerSideProps() {
  const bestSellers = await fetch(
    `http://localhost:8000/api/products/?bestseller=true`
  );
  const bestSellersData = await bestSellers.json();
  if (!bestSellersData) {
    return {
      notFound: true,
    };
  }

  const newArrival = await fetch(
    `http://localhost:8000/api/products/?bestseller=true`
  );
  const newArrivalData = await newArrival.json();
  if (!newArrivalData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      bestSellersProps: {
        bestSellers: bestSellersData.results,
        bestSellersItem: bestSellersData.count,
      },
      newArrivalProps: {
        newArrival: newArrivalData.results,
        newArrivalItem: newArrivalData.count,
      },
    },
  };
}
