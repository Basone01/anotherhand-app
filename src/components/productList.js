import React from 'react';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { getProducts } from 'actions/product';
import { bindActionCreators } from 'redux';
const enhance = compose(
	connect(
		({ product: { products } }) => ({ products }),
		(dispatch) => ({
			fetch: bindActionCreators(getProducts, dispatch)
		})
	),
	withProps(({ products }) => ({
		productList: products.map(({ name, _id }) => <li key={_id}>{name}</li>)
	}))
);

const ProductList = ({ productList }) => {
	return <ul>{productList}</ul>;
};

export default enhance(ProductList);
