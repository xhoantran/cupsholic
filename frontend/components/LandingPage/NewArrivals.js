import SessionHeader from "./SessionHeader";
import Gap from "../Gap";
import {
  ProductGridContainer,
  ProductWrapper,
} from "../Layout/ProductGridContainer";
import Product from "../Product";

const NewArrival = ({ newArrival, numsItem }) => {
  return (
    numsItem !== 0 && (
      <>
        <SessionHeader fontSize="30px">New Arrivals</SessionHeader>
        <Gap height="20px" />
        {/* ------------------------------------------------- */}
        <ProductWrapper>
          <ProductGridContainer>
            {newArrival.map((product) => (
              <Product key={product.id} data={product} numsItem={numsItem} />
            ))}
          </ProductGridContainer>
        </ProductWrapper>
        <Gap height="20px" />
      </>
    )
  );
};

export default NewArrival;
