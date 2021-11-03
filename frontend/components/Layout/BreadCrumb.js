import styled from "styled-components";
import { BPSmall } from "./BreakPoint";
import Link from "next/link";

const Wrapper = styled.div`
  background-size: cover;
`;

const BreadCrumbBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  font-size: 12px;
  min-height: 25px;
  margin-bottom: 25px;
  color: #8e8b8a;
  border-bottom: 1px solid #000;

  @media only screen and (min-width: ${BPSmall}) {
    padding: 15px 35px;
    margin-bottom: 50px;
  }
`;
const BreadCrumb = styled.nav`
  font-size: inherit;
  padding-right: 10px;
  color: #8e8b8a;
`;
const BreadCrumbSlash = styled.i`
  font-style: normal;
  display: inline-flex;
  margin: 0 3px;
`;
const BreadCrumbMainPath = styled.a`
  color: #000;
`;

const BreadCrumbFunction = () => {
  return (
    <Wrapper>
      <BreadCrumbBar>
        <BreadCrumb>
          <Link href="/">
            <BreadCrumbMainPath>Home</BreadCrumbMainPath>
          </Link>
          <BreadCrumbSlash>/</BreadCrumbSlash>
          Shop
        </BreadCrumb>
      </BreadCrumbBar>
    </Wrapper>
  );
};

export default BreadCrumbFunction;
