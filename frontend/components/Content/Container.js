import styled from "styled-components";
import { BPMedium, BPLarge, BPSmall } from "../BreakPoint";
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #fff;
  min-height: 100vh;
`;
const ContentContainerRow = styled.div`
  max-width: 84.375rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-flow: row wrap;
  background-size: cover;

  @media (min-width: ${BPMedium}) {
    padding: 0 15px;
  }
`;
const ContentContainerColumn = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  max-width: 100%;
  @media (min-width: ${BPMedium}) {
    padding-right: 0.9375rem;
    padding-left: 0.9375rem;
  }
`;

function Content(props) {
  return (
    <ContentWrapper>
      <div>
        <ContentContainerRow>
          <ContentContainerColumn>{props.children}</ContentContainerColumn>
        </ContentContainerRow>
      </div>
    </ContentWrapper>
  );
}

export default Content;
