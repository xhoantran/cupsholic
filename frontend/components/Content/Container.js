import styled from "styled-components";
import { BPSmall } from "../BreakPoint";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #fff;
`;
const ContentContainerRow = styled.div`
  max-width: 84.375rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-flow: row wrap;
  background-size: cover;

  @media (min-width: ${BPSmall}) {
    padding: 0 15px;
  }
`;
const ContentContainerColumn = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  max-width: 100%;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
`;

function Content(props) {
  return (
    <>
      <ContentContainerRow>
        <ContentContainerColumn>{props.children}</ContentContainerColumn>
      </ContentContainerRow>
    </>
  );
}

export default Content;
