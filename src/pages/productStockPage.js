import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getProducts } from "actions/product";
import React, { Component } from "react";
import ProductList from "../containerComponents/productList";
import AddIcon from "react-icons/lib/fa/plus-square-o";
import { LinkButton } from "styles";
import { TopNavbarContainer, JustFlex, PageContainer, BottomNavbarContainer, MainContainer } from "../styles";
import ProductSearchBox from "../components/productSearchBox";
import InputToggle from '../components/inputToggle';
export class ProductStockPage extends Component {
  static propTypes = {};
  state = {
    searchValue: "",
    filter: {
      name: true,
      tags: false
    }
  };

  constructor(props) {
    super(props)
    this.toggleFilter = this.toggleFilter.bind(this)
  }


  componentDidMount() {
    this.props.fetchProducts();
  }

  handleSearchChange(value) {
    this.setState(state => ({
      searchValue: value
    }));
  }

  toggleFilter(key) {
    this.setState(state => ({
      ...state,
      filter: {
        ...state.filter,
        [key]: !state.filter[key]
      }
    }))
  }

  render() {
    const {searchValue, filter} = this.state;
    const {products} = this.props;
    const filteredProducts = (filter.name || filter.tags) ? products.filter(({name, tags}) => {
      const lowerValue = searchValue.toLowerCase();
      return (
        (filter.name && name.toLowerCase().includes(lowerValue)) ||
        (filter.tags && tags
          .join("")
          .toLowerCase()
          .includes(lowerValue)
        ));
    }) : products;
    return (
      <PageContainer>
        <TopNavbarContainer>
          สินค้าของคุณ
          <LinkButton to="/add">
            <AddIcon size={ 18 } />
          </LinkButton>
        </TopNavbarContainer>
        <MainContainer>
          <JustFlex style={ { flexShrink: 0 } }>
            <ProductSearchBox style={ { flex: 1 } } value={ searchValue } onChange={ e => this.handleSearchChange(e.target.value) } />
            <InputToggle value={ filter.name } onChange={ () => this.toggleFilter('name') }>Name</InputToggle>
            <InputToggle value={ filter.tags } onChange={ () => this.toggleFilter('tags') }>Tags</InputToggle>
          </JustFlex>
          <ProductList products={ filteredProducts } />
        </MainContainer>
        <BottomNavbarContainer />
      </PageContainer>
      );
  }
}

const mapStateToProps = ({product}) => ({
  ...product
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: bindActionCreators(getProducts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductStockPage);
