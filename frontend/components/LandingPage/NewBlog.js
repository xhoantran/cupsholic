import SessionHeader from "../SessionHeader";
import styled from "styled-components";
import HorizontalLine from "../HorizontalLine";
import Gap from "../Gap";

const TitleDecription = styled.p`
  text-align: center;
  margin-bottm: 10px;
`;

const BlogList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  line-height: 1.6;
  list-style: none;

  margin: 0 -15px;
`;

const NewBlog = () => {
  return (
    <>
      <HorizontalLine />
      <Gap height="41px" />
      <SessionHeader>Newest Blog</SessionHeader>
      <TitleDecription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, labore?
      </TitleDecription>
    </>
  );
};

export default NewBlog;
