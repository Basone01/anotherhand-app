import { call, put, takeLatest } from "redux-saga/effects";
import { getProducts, createProduct } from "src/api";
import * as types from "../types";

function* fetchProductsWorker(a) {
  yield put({ type: types.DISPLAY_LOADING_SPINNER });
  try {
    const products  = yield call(getProducts);
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
    yield put({ type: types.CREATE_PRODUCTS_SUCCESS });
    yield put({ type: types.HIDE_LOADING_SPINNER });
    yield put({ type: types.REDIRECT, payload: "/" });
  } catch (e) {
    yield put({ type: types.CREATE_PRODUCTS_ERROR, payload: e });
    yield put({ type: types.HIDE_LOADING_SPINNER });
  }
}

export default [
  takeLatest(types.FETCH_PRODUCTS, fetchProductsWorker),
  takeLatest(types.CREATE_PRODUCTS, createProductWorker)
];
