import styled from "styled-components";
import { BPSmall } from "../BreakPoint";

const SubheaderContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  text-align: center;
  font-size: 13px;
  width: 100%;
  line-height: 1;
  padding: 9px 10px;
  font-weight: 400;
  margin: 0;
  color: #fff;

  @media (min-width: ${BPSmall}) {
    padding: 9px 20px;
    font-size: 14px;
  }
`;

const Subheader = () => {
  return (
    <>
      <SubheaderContainer>
        Free Tracked Shipping Worldwide On Orders Over $30
      </SubheaderContainer>
    </>
  );
};

export default Subheader;
