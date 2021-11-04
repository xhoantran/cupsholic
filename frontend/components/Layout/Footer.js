import styled from "styled-components";
import { BPMedium, BPSmall } from "./BreakPoint";

const FooterWrapper = styled.footer`
  background: #ffdab9;
  border-top: 1px solid #000;
  padding: 45px 0;

  margin-top: 60px;

  @media (min-width: ${BPSmall}) {
    padding: 60px 0;
  }

  @media (min-width: ${BPMedium}) {
    padding: 75px 0;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${BPSmall}) {
    padding: 0 15px;
  }
`;

const FooterElement = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 1rem;
  @media (min-width: ${BPSmall}) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: ${BPMedium}) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
const FooterMenu = styled.ul`
  list-style-type: none;
  margin-bottom: 2rem;
`;
const FooterMenuItem = styled.li`
  margin-bottom: 0.5rem;
`;
const FooterMenuItemLink = styled.a`
  color: #000000;
`;

const LogoContainer = styled.h3`
  margin-bottom: 2rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterElement>
          <LogoContainer>Cupsholic</LogoContainer>
        </FooterElement>
        <FooterElement>
          <FooterMenu>
            <FooterMenuItem>
              <FooterMenuItemLink>About us</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>Our Design</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>Careers</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>Affiliates</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>Track Your Order</FooterMenuItemLink>
            </FooterMenuItem>
          </FooterMenu>
        </FooterElement>
        <FooterElement>
          <FooterMenu>
            <FooterMenuItem>
              <FooterMenuItemLink>Facebook</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>Twitter</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>Instagram</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>Pinterest</FooterMenuItemLink>
            </FooterMenuItem>
          </FooterMenu>
        </FooterElement>
        <FooterElement>
          <FooterMenu>
            <FooterMenuItem>
              <FooterMenuItemLink>Privacy Policy</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>Terms of Use</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>Contact Us</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>FAQ</FooterMenuItemLink>
            </FooterMenuItem>
          </FooterMenu>
        </FooterElement>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
