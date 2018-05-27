import { call, put, takeLatest } from "redux-saga/effects";
import { getProducts, createProduct,deleteProduct } from "src/api";
import * as types from "../types";

function* fetchProductsWorker(a) {
  yield put({ type: types.DISPLAY_LOADING_SPINNER });
  try {
    const products = yield call(getProducts);
    console.log(products);
    yield put({ type: types.FETCH_PRODUCTS_SUCCESS, payload: products });
    yield put({ type: types.HIDE_LOADING_SPINNER });
  } catch (e) {
    yield put({ type: types.FETCH_PRODUCTS_ERROR, payload: e });
    yield put({ type: types.HIDE_LOADING_SPINNER });
  }
}

function* createProductWorker({ type, payload }) {
  yield put({ type: types.DISPLAY_LOADING_SPINNER });
  try {
    const data = yield call(createProduct, payload);
    yield put({ type: types.CREATE_PRODUCT_SUCCESS });
    yield put({ type: types.HIDE_LOADING_SPINNER });
    yield put({ type: types.REDIRECT, payload: "/" });
  } catch (e) {
    yield put({ type: types.CREATE_PRODUCT_ERROR, payload: e });
    yield put({ type: types.HIDE_LOADING_SPINNER });
  }
}

function* deleteProductWorker({ type, payload }) {
  yield put({ type: types.DISPLAY_LOADING_SPINNER });
  try {
    const data = yield call(deleteProduct, payload);
    if (!data.success) {
      throw new Error("cannot delete")
    }
    yield put({ type: types.DELETE_PRODUCT_SUCCESS });
    yield put({ type: types.HIDE_LOADING_SPINNER });
    yield put({ type: types.REDIRECT, payload: "/" });
  } catch (e) {
    yield put({ type: types.DELETE_PRODUCT_ERROR, payload: e });
    yield put({ type: types.HIDE_LOADING_SPINNER });
  }
}

export default [
  takeLatest(types.FETCH_PRODUCTS, fetchProductsWorker),
  takeLatest(types.CREATE_PRODUCT, createProductWorker),
  takeLatest(types.DELETE_PRODUCT, deleteProductWorker)
];
