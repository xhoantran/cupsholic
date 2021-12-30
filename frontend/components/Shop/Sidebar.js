import styled from "styled-components";
import { BPMedium } from "../Layout/BreakPoint";
import { useRouter } from "next/router";

const SidebarWidgetItem = styled.li`
  margin-bottom: 5px;
`;
const SidebarWidgetItemLink = styled.a`
  color: #000;
  &:hover {
    color: #eb9a72;
  }
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

  &:hover::before,
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

const CategoryFilter = ({ categories }) => {
  return (
    <SidebarWidgetContainer>
      <SidebarWidgetTitle>Categories</SidebarWidgetTitle>
      <SidebarWidgetList>
        {categories.map((category, index) => (
          <SidebarWidgetItem key={index}>
            <SidebarWidgetItemLink>{category.name}</SidebarWidgetItemLink>
          </SidebarWidgetItem>
        ))}
      </SidebarWidgetList>
    </SidebarWidgetContainer>
  );
};

const ColorFilter = ({ colors }) => {
  return (
    <SidebarWidgetContainer>
      <SidebarWidgetTitle>Fillter by Color</SidebarWidgetTitle>
      <SidebarWidgetList>
        {colors.map((color, index) => (
          <ItemFilterContainer key={index}>
            <ItemFilterFillterLink>{color.name}</ItemFilterFillterLink>
          </ItemFilterContainer>
        ))}
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

const Sidebar = ({ filterProps }) => {
  const { categories, colors } = filterProps;
  return (
    <>
      <SidebarWrapper>
        <SideBarContainer>
          <CategoryFilter categories={categories} />
          <ColorFilter colors={colors} />
          <SizeFilter />
        </SideBarContainer>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
