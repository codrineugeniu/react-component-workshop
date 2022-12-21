import ProductListItem from "./ProductListItem";
import SearchBox from "./SearchBox";

import { MOCK_PRODUCTS } from "../../App";

export const ProductList = (props) => {
  console.log("Mocks:", MOCK_PRODUCTS);
  return (
    <div>
      <SearchBox />
      <ul>
        {props.products.map((product) => (
          <ProductListItem product={product} />
        ))}
      </ul>
    </div>
  );
};
