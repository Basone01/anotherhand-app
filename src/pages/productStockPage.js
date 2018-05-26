import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getProducts } from "actions/product";
import React, { Component } from "react";
import ProductList from "../containerComponents/productList";
import AddIcon from "react-icons/lib/fa/plus-square-o";
import { LinkButton } from "styles";
import {
  TopNavbarContainer,
  ScrollableContainer,
  PageContainer,
  BottomNavbarContainer
} from "../styles";
import ProductSearchBox from "../components/productSearchBox";
export class ProductStockPage extends Component {
  static propTypes = {};
  state = {
    searchValue: ""
  };
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleSearchChange(value) {
    this.setState(state => ({
      searchValue: value
    }));
  }

  render() {
    const { searchValue } = this.state;
    const { products } = this.props;
    const filteredProducts = products.filter(({ name, tags }) => {
      const lowerValue = searchValue.toLowerCase();
      return (
        name.toLowerCase().includes(lowerValue) ||
        tags
          .join("")
          .toLowerCase()
          .includes(lowerValue)
      );
    });
    return (
      <PageContainer>
        <TopNavbarContainer>
          สินค้าของคุณ
          <LinkButton to="/add">
              <AddIcon size={18} />
          </LinkButton>
        </TopNavbarContainer>
        <ScrollableContainer>
          <ProductSearchBox
            value={searchValue}
            onChange={e => this.handleSearchChange(e.target.value)}
          />
          <ProductList products={filteredProducts} />
        </ScrollableContainer>
        <BottomNavbarContainer />
      </PageContainer>
    );
  }
}

const mapStateToProps = ({ product }) => ({
  ...product
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: bindActionCreators(getProducts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductStockPage);
