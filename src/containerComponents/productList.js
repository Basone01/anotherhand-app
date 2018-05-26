import React from "react";
import { compose, withProps } from "recompose";
import ProductListItem from "components/productListItem";
const enhance = compose(
  withProps(({ products }) => ({
    productList: products.map(product => (
      <ProductListItem key={product._id} {...product} />
    ))
  }))
);
const ProductList = enhance(({ productList }) => {
  return <ul>{productList}</ul>;
});

export default ProductList;
