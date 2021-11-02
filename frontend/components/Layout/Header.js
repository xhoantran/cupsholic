import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { BPLarge, BPSmall } from "../BreakPoint";
import ArrowDownIcon from "../Icon/ArrowDown";
// import BagIcon from "../Icon/Bag";
import SearchIcon from "../Icon/Search";
import UserIcon from "../Icon/User";
import useFocus from "../CustomHook/useFocus";

const HeaderWrapper = styled.div`
  height: 65px;
`;
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  position: relative;
  z-index: 30;
  width: 100%;
  user-select: none;
  background: #fff;
  border-bottom: 1px solid #000;

  &.fixed {
    position: fixed;
    z-index: 40;
  }

  &.fixed::before {
    box-shadow: 0 0 0 6px rgb(0 0 0 / 5%);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 1;
    pointer-events: none;
  }
`;
const HeaderRow = styled.div`
  width: 100%;
  padding: 10px 0;
  position: relative;
  background: rgba(255, 255, 255, 0.8);
  z-index: 5;
`;
const HeaderRowContainer = styled.div`
  width: 100%;
  padding: 0px 15px;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-flow: row wrap;

  @media (min-width: ${BPSmall}) {
    padding: 0px 30px;
  }
`;
const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%;

  @media (min-width: ${BPLarge}) {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }
`;
const ToggleHodler = styled.div`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  @media (min-width: ${BPLarge}) {
    display: none;
  }
`;
const MobileToggle = styled.div`
  display: inline-flex;
  width: 18px;
  height: 16px;
  align-items: center;
  transition: none;
  vertical-align: middle;
  position: relative;

  & span:nth-child(1) {
    top: 0px;
  }
  & span:nth-child(2) {
    top: 7px;
  }
  & span:nth-child(3) {
    top: 14px;
  }
`;
const ToggleBar = styled.span`
  position: absolute;
  width: 18px;
  height: 2px;
  background: #000;
  content: " ";
  left: 0;
`;
const LogoContainer = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  margin: 0 auto 0 5px;
  max-width: 100%;
`;
const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
  position: relative;
`;
const HeaderActionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;

  @media (min-width: ${BPLarge}) {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }
`;
const HeaderActionContainer = styled.div`
  margin-left: auto;
  display: flex;
`;
const IconContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  padding: 10px 0;
  margin-left: 12px;

  @media only screen and (min-width: 768px) {
    margin-left: 22px;
  }
`;
const HeaderNavigationWrapper = styled.div`
  @media (max-width: ${BPLarge}) {
    display: none;
  }
  @media (min-width: ${BPLarge}) {
    display: flex;
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
    align-items: center;
    padding: 0;
  }
`;
const HeaderNavigationContainer = styled.div`
  display: inline-flex;
  margin: 0 auto;
`;
const HeaderNavigationMenu = styled.ul`
  display: inline-flex;
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 1;
  flex-wrap: wrap;
`;
const HeaderNavigationItem = styled.li`
  display: inline-flex;
  white-space: nowrap;
  margin-left: 20px;
`;
const HeaderNavigationItemLink = styled.a`
  min-height: 45px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;

  &:hover,
  &.active {
    color: #eb9a72;
  }
`;
const ArrorDownIconWrapper = styled.div`
  margin-left: 5px;
  padding-bottom: 4px;
`;

const Wave = keyframes`
  0%, 8% {
    transform: translateY(0)
  }
  4% {
    transform: translateY(-5px)
  }
`;
const ShopLetterAnimate = styled.div`
  display: inline-block;
  animation: ${Wave} 5s infinite;
  animation-delay: calc(0.1s * var(--i) + 2s);
`;
const SearchIconInnerWrapper = styled.div`
  z-index: 40;
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
`;
const SearchBarWrapper = styled.div`
  display: none;
  position: absolute;
  z-index: 30;
  top: 3px;
  right: 0;
  background: #fff;
  padding-left: 30px;
  width: calc(100vw - 50px);

  @media only screen and (min-width: 768px) {
    width: 300px;
  }

  &.active {
    display: block;
  }
`;
const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
  display: inline-flex;
  padding-right: 40px;
`;
const SearchBarForm = styled.form`
  display: flex;
  position: relative;
  border-radius: 5px;
  padding-right: 38px;
  width: 100%;
  max-width: 500px;
`;
const SearchForLabel = styled.label`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal;
`;
const SearchBarInput = styled.input`
  font-weight: 400;
  background: #fff;
  max-width: 100%;
  outline: 0;
  font-family: inherit;
  border-radius: 6px;
  color: #000;
  box-shadow: none;
  appearance: none;
  padding: 10px 0px;
  border: 0;
  flex: 1;
  height: 38px;
  font-size: 14px;
  background-color: transparent;
  outline-offset: -2px;
`;

const Header = ({ onOpenMenu }) => {
  const { asPath } = useRouter();
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

  const [inputRef, setInputFocus] = useFocus();
  const [openSearch, setOpenSearch] = useState(false);
  const searchToggle = () => {
    setOpenSearch(!openSearch);
    setTimeout(() => {
      setInputFocus();
    }, 10);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer
        className={
          scrollY < 32
            ? "transition-cubic-bezier"
            : "transition-cubic-bezier fixed"
        }
      >
        <HeaderRow>
          <HeaderRowContainer>
            <HeaderLogoWrapper>
              <ToggleHodler onClick={onOpenMenu}>
                <ToggleHodler>
                  <MobileToggle>
                    <ToggleBar />
                    <ToggleBar />
                    <ToggleBar />
                  </MobileToggle>
                </ToggleHodler>
              </ToggleHodler>
              <LogoContainer>
                <LogoLink>
                  <h3>Cupsholic</h3>
                </LogoLink>
              </LogoContainer>
            </HeaderLogoWrapper>
            {/* ------------------------------------------------- */}
            <HeaderNavigationWrapper>
              <HeaderNavigationContainer>
                <nav>
                  <HeaderNavigationMenu>
                    <HeaderNavigationItem>
                      <HeaderNavigationItemLink
                        className={asPath === "/" ? "active" : null}
                      >
                        Home
                      </HeaderNavigationItemLink>
                    </HeaderNavigationItem>
                    <HeaderNavigationItem>
                      <HeaderNavigationItemLink
                        className={asPath === "/shop/" ? "active" : null}
                      >
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
                      </HeaderNavigationItemLink>
                    </HeaderNavigationItem>
                    <HeaderNavigationItem>
                      <HeaderNavigationItemLink
                        className={asPath === "/blog/" ? "active" : null}
                      >
                        Blog
                      </HeaderNavigationItemLink>
                    </HeaderNavigationItem>
                    <HeaderNavigationItem>
                      <HeaderNavigationItemLink
                        className={asPath === "/about/" ? "active" : null}
                      >
                        About
                      </HeaderNavigationItemLink>
                    </HeaderNavigationItem>
                    <HeaderNavigationItem>
                      <HeaderNavigationItemLink
                        className={asPath === "/contact/" ? "active" : null}
                      >
                        Contact
                      </HeaderNavigationItemLink>
                    </HeaderNavigationItem>
                  </HeaderNavigationMenu>
                </nav>
              </HeaderNavigationContainer>
            </HeaderNavigationWrapper>
            {/* --------------------Session Header------------------------- */}
            <HeaderActionWrapper>
              <HeaderActionContainer>
                <IconContainer style={{ position: "relative" }}>
                  <SearchIconInnerWrapper onClick={() => searchToggle()}>
                    <SearchIcon />
                  </SearchIconInnerWrapper>
                  <SearchBarWrapper className={openSearch ? "active" : null}>
                    <SearchBarContainer>
                      <SearchBarForm>
                        <SearchBarInput
                          placeholder="Search your favorite cups..."
                          ref={inputRef}
                        />
                      </SearchBarForm>
                    </SearchBarContainer>
                  </SearchBarWrapper>
                </IconContainer>
                {/* ------------------- */}
                <IconContainer>
                  <UserIcon />
                </IconContainer>
                {/* ------------------- */}
                {/* <IconContainer>
                  <BagIcon />
                </IconContainer> */}
              </HeaderActionContainer>
            </HeaderActionWrapper>
            {/* --------------------Session Header------------------------- */}
          </HeaderRowContainer>
        </HeaderRow>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
