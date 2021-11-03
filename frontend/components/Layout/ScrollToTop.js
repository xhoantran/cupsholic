import styled from "styled-components";
import ArrowUp from "../Icon/ArrowUp";
import { useState, useEffect } from "react";

const Container = styled.a`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  font-size: 22px;
  position: fixed;
  bottom: -50px;
  right: 15px;
  z-index: 100;

  &.active {
    bottom: 15px;
  }
`;

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollToTop = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      className={
        scrollY > 328
          ? "active transition-cubic-bezier"
          : "transition-cubic-bezier"
      }
      onClick={handleScrollToTop}
    >
      <ArrowUp />
    </Container>
  );
};

export default ScrollToTop;
