import React from "react";
import { connect } from "react-redux";
import { compose, withProps } from "recompose";
import { getProducts } from "actions/product";
import { bindActionCreators } from "redux";
import { IMAGE_ENDPOINT } from "../config";
import styled from "styled-components";

const ProductListItemBox = styled.li`
  display: flex;
  min-height: 100px;
  padding: 4px;
  margin: 8px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
`;
const ProductImage = styled.img`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  object-fit: contain;
  object-position: center;
  padding: 8px;
  margin: 4px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;
const ProductDetailSide = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 4px;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 8px;
`;

const ProductListItem = ({
  images_path,
  name,
  price,
  size_type,
  sizes,
  description,
  stock
}) => (
  <ProductListItemBox>
    <ProductImage src={IMAGE_ENDPOINT + images_path} alt="name" />
    <ProductDetailSide>
      <h5 style={{ borderBottom: "1px solid rgba(0,0,0,0.5)" }}>{name}</h5>
      {sizes.length > 0 ? (
        <ul>
          ไซส์ :
          {sizes.map(({ size, stock }) => (
            <li
              key={size}
              style={{
                display: "inline-block",
                marginRight: 8,
                textDecoration: stock > 0 ? "none" : "line-through"
              }}
            >
              {size}
              {size_type}
            </li>
          ))}
        </ul>
      ) : (
        <p>เหลือ {stock} ชิ้น</p>
      )}
      {/* <p style={{fontSize:12}}>{description}</p> */}
      <p />
      <PriceBox>
        <h4>{price} ฿</h4>
      </PriceBox>
    </ProductDetailSide>
  </ProductListItemBox>
);

const enhance = compose(
  connect(
    ({ product: { products } }) => ({ products }),
    dispatch => ({
      fetch: bindActionCreators(getProducts, dispatch)
    })
  ),
  withProps(({ products }) => ({
    productList: products.map(({ _id, ...product }) => (
      <ProductListItem key={_id} {...product} />
    ))
  }))
);

const ProductList = ({ productList }) => {
  return <ul>{productList}</ul>;
};

export default enhance(ProductList);
