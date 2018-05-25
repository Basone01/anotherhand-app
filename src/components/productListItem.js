import React from "react";
import styled from "styled-components";
import { fadeOnHover, mousePointer, roundedBoxShadow } from "styles/css";
import { IMAGE_ENDPOINT } from "../config";
import { withRouter } from "react-router-dom";

const ProductListItemBox = styled.li`
  display: flex;
  min-height: 100px;
  padding: 4px;
  margin: 8px;
  ${roundedBoxShadow};
  ${mousePointer};
  ${fadeOnHover};
`;
const ProductImage = styled.img`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  object-fit: contain;
  object-position: center;
  padding: 8px;
  margin: 4px;
  ${roundedBoxShadow};
`;
const ProductDetailSide = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 8px 4px;
  > * {
    margin-bottom: 8px;
  }
`;

const PriceBox = styled.div`
  align-self: flex-end;
  padding-right: 8px;
`;

const Stock = styled.p`
  margin-top: auto;
`;

const ProductListItem = ({
  _id,
  images_path,
  name,
  price,
  size_type,
  sizes,
  description,
  stock,
  onClick,
  history
}) => (
  <ProductListItemBox
    onClick={() => {
      history.push(`/product/${_id}`);
    }}
  >
    <ProductImage src={IMAGE_ENDPOINT + images_path} alt="name" />
    <ProductDetailSide>
      <h5 style={{ borderBottom: "1px solid rgba(0,0,0,0.5)" }}>{name}</h5>
      {sizes.length > 0 ? (
        <React.Fragment>
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
          <Stock>
            เหลือทั้งหมด {sizes.reduce((stock, size) => stock + size.stock, 0)}{" "}
            ชิ้น
          </Stock>
        </React.Fragment>
      ) : (
          <Stock>เหลือทั้งหมด {stock} ชิ้น</Stock>
      )}

      <PriceBox>
        <h4>{price} ฿</h4>
      </PriceBox>
    </ProductDetailSide>
  </ProductListItemBox>
);

export default withRouter(ProductListItem);
