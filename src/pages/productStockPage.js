import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProducts } from 'actions/product';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductList from 'components/productList';
import { TopNavbarContainer, HorizontalScrollableContainer, PageContainer, BottomNavbarContainer } from '../styles';

export class ProductStockPage extends Component {
	static propTypes = {};
	componentDidMount() {
		this.props.fetchProducts();
	}

	render() {
		return (
			<PageContainer>
				<TopNavbarContainer>สินค้าของคุณ</TopNavbarContainer>
				<HorizontalScrollableContainer>
					<ProductList />
				</HorizontalScrollableContainer>
				<BottomNavbarContainer>
					<NavLink to="/add">เพิ่มสินค้า</NavLink>
				</BottomNavbarContainer>
			</PageContainer>
		);
	}
}

const mapStateToProps = ({ product }) => ({
	product
});

const mapDispatchToProps = (dispatch) => ({
	fetchProducts: bindActionCreators(getProducts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductStockPage);
