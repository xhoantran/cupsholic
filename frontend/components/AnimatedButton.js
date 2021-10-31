import styled from "styled-components";
import Link from "next/link";

const AttractButtonWrapper = styled.div`
  ${(props) =>
    !props.alignLeft
      ? `
        display: block;
        margin: 0 auto;
        text-align: center;
        
      `
      : `
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 0.5em;
      `}
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
  padding: 20px 40px;
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

const AnimatedButton = ({ text, url, alignLeft }) => (
  <AttractButtonWrapper alignLeft={alignLeft}>
    <AttractButtonContainer>
      <Link href={url}>
        <AttractButton>{text}</AttractButton>
      </Link>
    </AttractButtonContainer>
  </AttractButtonWrapper>
);

export default AnimatedButton;
