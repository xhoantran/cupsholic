import styled from "styled-components";
import ArrowRight from "../Icon/ArrowRight";
import ArrowLeft from "../Icon/ArrowLeft";
import Link from "next/link";

const PreviousPageLink = styled.a`
  left: 0;
  position: absolute;
  top: 40px;
  width: auto;
  border: 0;
  background: none !important;
  height: 34px;
  text-align: center;
  justify-content: center;
  margin: 0 3px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  color: #000;
`;
const ArrowLeftWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
`;
const PreviousButton = ({ href }) => {
  return (
    <Link href={href}>
      <PreviousPageLink>
        <ArrowLeftWrapper>
          <ArrowLeft />
        </ArrowLeftWrapper>
        Previous
      </PreviousPageLink>
    </Link>
  );
};
const ArrowRightWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: 10px;
`;
const NextPageLink = styled.a`
  right: 0;
  position: absolute;
  top: 40px;
  width: auto;
  border: 0;
  background: none !important;
  height: 34px;
  text-align: center;
  justify-content: center;
  margin: 0 3px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  color: #000;
`;
const NextButton = ({ href }) => {
  return (
    <Link href={href}>
      <NextPageLink>
        Next
        <ArrowRightWrapper>
          <ArrowRight />
        </ArrowRightWrapper>
      </NextPageLink>
    </Link>
  );
};
const PaginationWrapper = styled.nav`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  position: relative;
  line-height: 1;
  padding: 40px 0 60px;
`;
const PageNumber = styled.a`
  display: inline-flex;
  align-items: center;
  color: #000;
  border: 1px solid #000;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  text-align: center;
  justify-content: center;
  margin: 0 3px;

  &:hover {
    background: #fecdab;
  }
`;
const CurrentPage = styled.span`
  display: inline-flex;
  align-items: center;
  color: #000;
  border: 1px solid #000;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  text-align: center;
  justify-content: center;
  margin: 0 3px;
  background: #fecdab;
  position: relative;
`;

function pagination(current, total) {
  if (total === 1) return [1];
  const center = [current - 2, current - 1, current, current + 1, current + 2],
    filteredCenter = center.filter((p) => p > 1 && p < total),
    includeThreeLeft = current === 5,
    includeThreeRight = current === total - 4,
    includeLeftDots = current > 5,
    includeRightDots = current < total - 4;

  if (includeThreeLeft) filteredCenter.unshift(2);
  if (includeThreeRight) filteredCenter.push(total - 1);

  if (includeLeftDots) filteredCenter.unshift("...");
  if (includeRightDots) filteredCenter.push("...");

  return [1, ...filteredCenter, total];
}

const ShopPagination = ({ numsItem, currentPage, itemPerPage = 9 }) => {
  const totalPages = Math.ceil(numsItem / itemPerPage);
  const pageArr = pagination(currentPage, totalPages);
  console.log(pageArr);
  return (
    <>
      <PaginationWrapper>
        {currentPage > 1 && (
          <PreviousButton href={`/shop/page/${currentPage - 1}`} />
        )}
        <>
          {pageArr.map((page) =>
            page === "..." ? (
              <span>...</span>
            ) : page === currentPage ? (
              <CurrentPage key={page}>{page}</CurrentPage>
            ) : (
              <PageNumber key={page} href={`/shop/page/${page}`}>
                {page}
              </PageNumber>
            )
          )}
        </>
        {currentPage < totalPages && (
          <NextButton href={`/shop/page/${currentPage + 1}`} />
        )}
      </PaginationWrapper>
    </>
  );
};

export default ShopPagination;
