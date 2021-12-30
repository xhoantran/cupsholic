import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BPSmall } from "./BreakPoint";
import ArrowDownIcon from "../Icon/ArrowDown";
import Link from "next/link";

const MobileMenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 60;
  overflow: scroll;
  width: 300px;
  max-width: 100%;
  border-right: 1px solid #000;
  transform: translateX(-100%);
  background: #fff;
  top: 0;
  transition: transform 0.3s ease;
  transition-delay: 0.3s;

  @media only screen and (min-width: ${BPSmall}) {
    width: 340px;
  }

  &.active {
    transition-delay: 0.2s;
    transform: translateX(0);
  }
`;
const MobileMenuHeader = styled.header`
  background: #fff;
  position: sticky;
  top: 0;
`;
const MobileMenuClose = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 31px;
  border-bottom: 1px solid #000;
  color: #000;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  font-weight: 600;

  &:hover {
    background: #000;
    color: #fff;
  }
`;
const MobileMenuInner = styled.div`
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    padding: 30px;
  }
`;
const MobileMenuNavigation = styled.ul`
  line-height: 1;
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
`;
const MobileMenuItem = styled.li`
  border-bottom: 1px solid #eee;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  transition-delay: calc(0.05s * (5 - var(--i)));

  &.active {
    transition-delay: calc(0.1s * var(--i) + 0s);
    opacity: 1;
  }
`;
const MobileMenuNavigationLink = styled.a`
  display: flex;
  align-items: center;
  text-transform: none;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 15px 0;
  line-height: 1;
  transition: none;
  color: #000;
`;
const Wave = keyframes`
  0%, 16% {
    transform: translateY(0)
  }
  8% {
    transform: translateY(-5px)
  }
`;
const ShopLetterAnimate = styled.div`
  display: inline-block;
  animation: ${Wave} 5s infinite;
  animation-delay: calc(0.1s * var(--i) + 2s);
`;
const ArrorDownIconWrapper = styled.div`
  margin-left: auto;
  padding-bottom: 4px;
`;
const MobileLoginMenu = styled.ul`
  display: inline-flex;
  list-style: none;
  line-height: 1;
  flex-wrap: wrap;
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
  flex-direction: column;
`;
const MobileLoginItem = styled.li`
  display: inline-flex;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  transition-delay: 0.1s;

  &.active {
    transition-delay: 0.6s;
    opacity: 1;
  }
`;
const MobileLoginItemLink = styled.a`
  font-size: 14px;
  line-height: 1;
  padding: 7px 0;
  color: rgba(0, 0, 0, 0.7);
  transition: none;
  min-height: 0;
  display: flex;
  align-items: center;
  font-weight: 400;
  transition: none;
`;

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      <MobileMenuContainer className={isOpen ? "active" : null}>
        <MobileMenuHeader onClick={onClose}>
          <MobileMenuClose>Close</MobileMenuClose>
        </MobileMenuHeader>
        <MobileMenuInner>
          <div>
            <MobileMenuNavigation>
              <MobileMenuItem
                style={{ "--i": 1 }}
                className={isOpen ? "active" : null}
              >
                <Link href="/">
                  <MobileMenuNavigationLink>Home</MobileMenuNavigationLink>
                </Link>
              </MobileMenuItem>
              <MobileMenuItem
                style={{ "--i": 2 }}
                className={isOpen ? "active" : null}
              >
                <Link href="/shop/">
                  <MobileMenuNavigationLink>
                    <ShopLetterAnimate style={{ "--i": 1 }}>
                      S
                    </ShopLetterAnimate>
                    <ShopLetterAnimate style={{ "--i": 2 }}>
                      h
                    </ShopLetterAnimate>
                    <ShopLetterAnimate style={{ "--i": 3 }}>
                      o
                    </ShopLetterAnimate>
                    <ShopLetterAnimate style={{ "--i": 4 }}>
                      p
                    </ShopLetterAnimate>
                    <ArrorDownIconWrapper>
                      <ArrowDownIcon />
                    </ArrorDownIconWrapper>
                  </MobileMenuNavigationLink>
                </Link>
              </MobileMenuItem>
              <MobileMenuItem
                style={{ "--i": 3 }}
                className={isOpen ? "active" : null}
              >
                <MobileMenuNavigationLink>Blog</MobileMenuNavigationLink>
              </MobileMenuItem>
              <MobileMenuItem
                style={{ "--i": 4 }}
                className={isOpen ? "active" : null}
              >
                <MobileMenuNavigationLink>About</MobileMenuNavigationLink>
              </MobileMenuItem>
              <MobileMenuItem
                style={{ "--i": 5 }}
                className={isOpen ? "active" : null}
              >
                <MobileMenuNavigationLink>Contact</MobileMenuNavigationLink>
              </MobileMenuItem>
            </MobileMenuNavigation>
            <MobileLoginMenu>
              <MobileLoginItem className={isOpen ? "active" : null}>
                <MobileLoginItemLink>Login</MobileLoginItemLink>
              </MobileLoginItem>
              <MobileLoginItem className={isOpen ? "active" : null}>
                <MobileLoginItemLink>Register</MobileLoginItemLink>
              </MobileLoginItem>
            </MobileLoginMenu>
          </div>
        </MobileMenuInner>
      </MobileMenuContainer>
    </>
  );
};

const FilterMenuPanel = ({ isOpen, onClose }) => {
  return (
    <>
      <MobileMenuContainer className={isOpen ? "active" : null}>
        <MobileMenuHeader onClick={onClose}>
          <MobileMenuClose>Close</MobileMenuClose>
        </MobileMenuHeader>
        <MobileMenuInner></MobileMenuInner>
      </MobileMenuContainer>
    </>
  );
};

const ClickCapture = styled.div`
  background-image: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.2)
  );
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
  transision-delay: 0.1s;
`;

const OverlayContainer = ({ isOpenMenu, onClose, isOpenFilter }) => {
  const [ClickCaptureStyle, setClickCaptureStyle] = useState({
    opacity: 0,
    visibility: "hidden",
    pointerEvents: "none",
  });

  useEffect(() => {
    if (isOpenMenu || isOpenFilter) {
      setClickCaptureStyle({
        opacity: 1,
        visibility: "visible",
        pointerEvents: "auto",
      });
    } else {
      setClickCaptureStyle({
        opacity: 0,
        pointerEvents: "none",
      });
      setTimeout(() => {
        setClickCaptureStyle({
          visibility: "hidden",
        });
      }, 400);
    }
  }, [isOpenMenu, isOpenFilter]);

  return (
    <>
      <ClickCapture
        onClick={onClose}
        style={{
          opacity: ClickCaptureStyle.opacity,
          visibility: ClickCaptureStyle.visibility,
          pointerEvents: ClickCaptureStyle.pointerEvents,
        }}
      />
      <MobileMenu isOpen={isOpenMenu} onClose={onClose} />
      {isOpenFilter !== null && (
        <FilterMenuPanel isOpen={isOpenFilter} onClose={onClose} />
      )}
    </>
  );
};

export default OverlayContainer;
