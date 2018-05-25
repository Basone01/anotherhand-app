import * as types from '../types';
export const createProduct = (product) => ({
	type: types.CREATE_PRODUCTS,
	payload: product
});
