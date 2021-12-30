import styled, { keyframes } from "styled-components";
import ArrowRight from "../../assets/icons/ArrowRight";
import ArrowLeft from "../../assets/icons/ArrowLeft";
import Link from "next/link";

const PreviousPageLink = styled.a`
  display: grid;
  font-weight: 500;
  background-color: #c3c3c3;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;
  pointer-events: none;
  width: 7rem;

  &.active {
    border-radius: 20px;
    grid-template-columns: 30px 1fr;
    background-color: #3280f9;
    pointer-events: all;
  }
  ${({ center }) =>
    !center &&
    "@media (max-width: 1068px) {width: auto !important; grid-template-columns: 1fr !important;}"}
`;
const ArrowLeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FadeInShowPrevious = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;
const PreviousPageText = styled.div`
  display: none;
  &.active {
    display: block;
    padding-left: 5px;
    animation: ${FadeInShowPrevious} 0.3s ease-in-out;
  }
  ${({ center }) =>
    !center && "@media (max-width: 1068px) {display: none !important;}"}
`;

const PreviousButton = ({ href, disable, center }) => {
  return (
    <Link href={href}>
      <PreviousPageLink
        style={{ display: href === "" ? "none" : "" }}
        className={disable ? "" : "active"}
        center={center}
      >
        <ArrowLeftWrapper>
          <ArrowLeft />
        </ArrowLeftWrapper>
        <PreviousPageText className={disable ? "" : "active"} center={center}>
          Back
        </PreviousPageText>
      </PreviousPageLink>
    </Link>
  );
};
const ArrowRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NextPageLink = styled.a`
  display: grid;
  font-weight: 500;
  background-color: #c3c3c3;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;
  pointer-events: none;

  &.active {
    width: 7rem;
    border-radius: 20px;
    grid-template-columns: 1fr 30px;
    background-color: #3280f9;
    pointer-events: all;
  }
  ${({ center }) =>
    !center &&
    "@media (max-width: 1068px) {width: auto !important; grid-template-columns: 1fr !important;}"}
`;
const FadeInShowNext = keyframes`
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;
const NextPageText = styled.div`
  display: none;
  &.active {
    display: block;
    text-align: right;
    animation: ${FadeInShowNext} 0.3s ease-in-out;
  }
  ${({ center }) =>
    !center && "@media (max-width: 1068px) {display: none !important;}"}
`;

const NextButton = ({ href, disable, center }) => {
  return (
    <Link href={href}>
      <NextPageLink
        style={{ display: href === "" ? "none" : "" }}
        className={disable ? "" : "active"}
        center={center}
      >
        <NextPageText className={disable ? "" : "active"} center={center}>
          Continue
        </NextPageText>
        <ArrowRightWrapper>
          <ArrowRight />
        </ArrowRightWrapper>
      </NextPageLink>
    </Link>
  );
};
const Wrapper = styled.nav`
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
  align-items: center;
  font-size: 14px;
  margin: 1rem 0;
  max-width: 300px;
  width: 80%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Navigate = ({
  next = "",
  prev = "",
  disableNext = false,
  disablePrev = false,
}) => {
  var center = next === "" || prev === "";
  return (
    <>
      <Wrapper center={center}>
        <PreviousButton href={prev} disable={disablePrev} center={center} />
        <NextButton href={next} disable={disableNext} center={center} />
      </Wrapper>
    </>
  );
};

export default Navigate;
