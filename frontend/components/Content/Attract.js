import styled from "styled-components";
import Image from "next/image";
import { BPMedium } from "../BreakPoint";

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
        <div style={{ height: "20px" }} ariaHidden={true}></div>
      </ContentAttractTextContainer>
    </ContentAttract>
  );
};

export default Attract;
