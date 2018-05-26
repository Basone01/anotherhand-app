import * as types from '../types';

export const createProduct = (product) => ({
	type: types.CREATE_PRODUCTS,
	payload: product
});

export const getProducts = () => ({ type: types.FETCH_PRODUCTS });
