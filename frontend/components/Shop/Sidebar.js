import styled from "styled-components";
import { BPMedium } from "../Layout/BreakPoint";

const SidebarWidgetItem = styled.li`
  margin-bottom: 5px;
`;
const SidebarWidgetItemLink = styled.a`
  color: #000;
`;
const SidebarWidgetContainer = styled.div`
  margin-bottom: 25px;
  padding-bottom: 23px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
`;

const SidebarWidgetTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1;
  color: #000;
`;
const SidebarWidgetList = styled.ul`
  list-style: none;
`;

const ItemFilterContainer = styled.li`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const ItemFilterFillterLink = styled.a`
  display: block;
  position: relative;
  padding-left: 25px;
  color: #000;

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -7px;
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid #000;
    color: #fff;
  }

  &.chosen::before {
    box-shadow: inset 0 0 0 1px;
    background: #000;
  }
`;

const SidebarLastWidgetContainer = styled.div`
  margin-bottom: 25px;
  font-size: 14px;
  border-bottom: 0;
`;

const CategoryFilter = () => {
  return (
    <SidebarWidgetContainer>
      <SidebarWidgetTitle>Categories</SidebarWidgetTitle>
      <SidebarWidgetList>
        <SidebarWidgetItem>
          <SidebarWidgetItemLink>Whine Cup</SidebarWidgetItemLink>
        </SidebarWidgetItem>
        <SidebarWidgetItem>
          <SidebarWidgetItemLink>Cute Cup</SidebarWidgetItemLink>
        </SidebarWidgetItem>
        <SidebarWidgetItem>
          <SidebarWidgetItemLink>Coffee Cup</SidebarWidgetItemLink>
        </SidebarWidgetItem>
        <SidebarWidgetItem>
          <SidebarWidgetItemLink>Random Cup</SidebarWidgetItemLink>
        </SidebarWidgetItem>
        <SidebarWidgetItem>
          <SidebarWidgetItemLink>Whine Cup</SidebarWidgetItemLink>
        </SidebarWidgetItem>
      </SidebarWidgetList>
    </SidebarWidgetContainer>
  );
};

const ColorFilter = () => {
  return (
    <SidebarWidgetContainer>
      <SidebarWidgetTitle>Fillter by Color</SidebarWidgetTitle>
      <SidebarWidgetList>
        <ItemFilterContainer>
          <ItemFilterFillterLink>Black</ItemFilterFillterLink>
        </ItemFilterContainer>
        <ItemFilterContainer>
          <ItemFilterFillterLink>Red</ItemFilterFillterLink>
        </ItemFilterContainer>
        <ItemFilterContainer>
          <ItemFilterFillterLink>Blue</ItemFilterFillterLink>
        </ItemFilterContainer>
      </SidebarWidgetList>
    </SidebarWidgetContainer>
  );
};

const SizeFilter = () => {
  return (
    <SidebarLastWidgetContainer>
      <SidebarWidgetTitle>Fillter by Size</SidebarWidgetTitle>
      <SidebarWidgetList>
        <ItemFilterContainer>
          <ItemFilterFillterLink>S</ItemFilterFillterLink>
        </ItemFilterContainer>
        <ItemFilterContainer>
          <ItemFilterFillterLink>M</ItemFilterFillterLink>
        </ItemFilterContainer>
        <ItemFilterContainer>
          <ItemFilterFillterLink>L</ItemFilterFillterLink>
        </ItemFilterContainer>
        <ItemFilterContainer>
          <ItemFilterFillterLink>XL</ItemFilterFillterLink>
        </ItemFilterContainer>
      </SidebarWidgetList>
    </SidebarLastWidgetContainer>
  );
};

const SidebarWrapper = styled.div`
  flex-shrink: 0;
  display: none;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: ${BPMedium}) {
    display: flex;
    max-width: 300px;
    padding-right: 45px;
  }
`;

const SideBarContainer = styled.div`
  @media only screen and (min-width: ${BPMedium}) {
    position: sticky;
    top: 40px;
  }
`;

const Sidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <SideBarContainer>
          <CategoryFilter />
          <ColorFilter />
          <SizeFilter />
        </SideBarContainer>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
