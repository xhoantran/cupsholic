import styled from "styled-components";

export const ProductWrapper = styled.div`
  text-align: center;
`;
export const ProductGridContainer = styled.ul`
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  min-width: 100%;
  margin: 0 0 30px;
  display: flex;

  flex-wrap: wrap;
  padding: 0;
  background-clip: padding-box;
  list-style-type: disc;

  @media (max-width: 480px) {
    display: block;
  }
`;
