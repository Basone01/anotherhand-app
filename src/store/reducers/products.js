import * as types from '../types';

const initalState = {
	products: [],
	isLoading: false,
	error: false,
	errorMessage: ''
};

export const addProductReducer = (state = initalState, { type, payload }) => {
	switch (type) {
		case types.FETCH_PRODUCTS:
			return { ...state, isLoading: true };
		case types.FETCH_PRODUCTS_SUCCESS:
			return { ...state, isLoading: false, products: payload };
		case types.FETCH_PRODUCTS_ERROR:
			return { ...state, error: true, errorMessage: payload };
		default:
			return state;
	}
};

export default addProductReducer;
