import styled from "styled-components";
import { BPMedium } from "../Layout/BreakPoint";
const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${BPMedium}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default ShopContainer;
