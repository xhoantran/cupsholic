import axios from "axios";
import { useEffect, useState } from "react";
import SessionHeader from "../SessionHeader";
import Gap from "../Gap";
import {
  ProductGridContainer,
  ProductWrapper,
} from "../Layout/ProductGridContainer";
import Product from "../Product";

const NewArrival = () => {
  const [newArrival, setNewArrival] = useState({
    products: [],
    numsItem: 0,
  });
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/?newarrival=true")
      .then((response) => {
        setNewArrival({
          products: response.data.results,
          numsItem: response.data.count,
        });
        console.log(response);
      });
  }, []);

  return (
    newArrival.numsItem !== 0 && (
      <>
        <SessionHeader fontSize="30px">New Arrivals</SessionHeader>
        <Gap height="20px" />
        {/* ------------------------------------------------- */}
        <ProductWrapper>
          <ProductGridContainer>
            {newArrival.products.map((product) => (
              <Product
                key={product.id}
                data={product}
                numsItem={newArrival.numsItem}
              />
            ))}
          </ProductGridContainer>
        </ProductWrapper>
        <Gap height="20px" />
      </>
    )
  );
};

export default NewArrival;
