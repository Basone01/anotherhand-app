import React, { Component } from "react";
import { LinkButton, ImageIcon } from "styles";
import { BottomNavbarContainer } from "../styles";
import ProductSearchBox from "../components/productSearchBox";
import ProductStockIcon from "react-icons/lib/ti/shopping-cart";

const MainBottomNavbar = props => (
  <BottomNavbarContainer {...props}>
    <LinkButton to="/">
      <ImageIcon src={require("../styles/logo.png")} />
    </LinkButton>
    <LinkButton to="/products">
      <ProductStockIcon size={32} />
    </LinkButton>
    <LinkButton to="/">
      <ImageIcon src={require("../styles/logo.png")} />
    </LinkButton>
    <LinkButton to="/products">
      <ProductStockIcon size={32} />
    </LinkButton>
    <LinkButton to="/">
      <ImageIcon src={require("../styles/logo.png")} />
    </LinkButton>
  </BottomNavbarContainer>
);

export default MainBottomNavbar;
