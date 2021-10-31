import styled from "styled-components";
import Image from "next/image";
import { BPMedium } from "../BreakPoint";
import AnimatedButton from "../AnimatedButton";

const ContentAttract = styled.div`
  direction: ltr;
  display: grid;
  grid-template-rows: auto;
  margin: 32px calc(50% - 50vw);
  max-width: 100vw;
  width: 100vw;
  margin-bottom: 1rem;
  margin-top: 0;
  border-bottom: 1px solid #000;
  grid-template-columns: 1fr 50%;
  background-color: #fef2e7;

  @media (max-width: 600px) {
    grid-template-columns: 100% !important;
  }
`;
const ContentAttractFigure = styled.figure`
  align-self: center;
  grid-column: 2;
  grid-row: 1 /*!rtl:end:ignore*/;
  height: 100%;
  min-height: 250px;
  background-size: cover;
  background-position: 50% 50%;
  background-image: url(https://33esog1b5uudrsor3485evx1-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/o2-1024x725.jpg);

  @media (max-width: 600px) {
    grid-column: 1;
    grid-row: 1;
  }
`;
const ContentAttractTextContainer = styled.div`
  align-self: center;
  word-break: break-word;
  padding: 14%;
  grid-column: 1;
  grid-row: 1 /*!rtl:end:ignore*/;

  @media (max-width: 600px) {
    grid-column: 1;
    grid-row: 2;
  }
`;
const ContentAttractTextImage = styled.div`
  margin: 0 0 1em;
`;
const ContentAttractTextFigure = styled.figure`
  margin-left: auto;
  margin-right: auto;
  display: table;
  clear: both;
`;
const ContentAttractTextTitle = styled.h1`
  text-align: center;
  line-height: 1.1;
  @media (min-width: ${BPMedium}) {
    font-size: 2.5rem;
  }
`;
const ContentAttractTextDescript = styled.p`
  text-align: center;
  word-spacing: 0.001em;
  font-feature-settings: "kern" 1;
  font-kerning: normal;
`;
const AttractButtonWrapper = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
`;
const AttractButtonContainer = styled.div`
  display: inline-block;
  margin-left: 0;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -5px;
    left: 5px;
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    border-radius: 5px;
    z-index: 0;
  }

  &:hover > {
    &:first-child {
      transform: translate3d(2px, 2px, 0);
    }
  }
`;
const AttractButton = styled.a`
  border-radius: 5px;
  background-color: #fecdab;
  border-color: #000;
  color: #000;
  padding: 18px 40px;
  transform: translate3d(0px, 0px, 0);
  transition: all 0.25s ease;
  font-size: 16px;
  font-weight: 400;
  position: relative;
  z-index: 1;
  border: 1px solid;
  box-shadow: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  overflow-wrap: break-word;
`;

const Attract = () => {
  const figureSrc =
    "https://33esog1b5uudrsor3485evx1-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/o2-1.png";
  return (
    <ContentAttract>
      <ContentAttractFigure />
      <ContentAttractTextContainer>
        <ContentAttractTextImage>
          <ContentAttractTextFigure>
            <Image
              loader={() => figureSrc}
              src={figureSrc}
              width={86}
              height={92}
            />
          </ContentAttractTextFigure>
        </ContentAttractTextImage>
        {/* ------------------------------------------------ */}
        <ContentAttractTextTitle>
          BEST CUP FOR
          <br />
          YOU
        </ContentAttractTextTitle>
        {/* ------------------------------------------------ */}
        <ContentAttractTextDescript>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat
          rerum nam praesentium quam repellat ut tempore aliquam voluptate eum!
        </ContentAttractTextDescript>
        {/* ------------------------------------------------ */}
        <div style={{ height: "20px" }} aria-hidden={true}></div>
        <AnimatedButton url="/products" text="See All Product" />
      </ContentAttractTextContainer>
    </ContentAttract>
  );
};

export default Attract;
