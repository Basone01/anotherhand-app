import * as types from "../types";

export const createProduct = product => ({
  type: types.CREATE_PRODUCT,
  payload: product
});

export const getProducts = () => ({ type: types.FETCH_PRODUCTS });

export const deleteProduct = _id => ({
  type: types.DELETE_PRODUCT,
  payload: _id
});

export const updateProduct = product => ({
  type: types.UPDATE_PRODUCT,
  payload: product
});
