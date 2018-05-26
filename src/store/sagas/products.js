import { call, put, takeLatest } from 'redux-saga/effects';
import { getProducts, createProduct } from 'src/api';
import * as types from '../types';

function* fetchProductsWorker(a) {
	try {
		const { data } = yield call(getProducts);
		console.log(data);
		yield put({ type: types.FETCH_PRODUCTS_SUCCESS, payload: data });
	} catch (e) {
		yield put({ type: types.FETCH_PRODUCTS_ERROR, payload: e });
	}
}

function* createProductWorker({ type, payload }) {
	try {
		const { data } = yield call(createProduct, payload);
		console.log(data)
	} catch (e) {
		yield put({ type: types.FETCH_PRODUCTS_ERROR, payload: e });
	}
}

export default [
	takeLatest(types.FETCH_PRODUCTS, fetchProductsWorker),
	takeLatest(types.CREATE_PRODUCTS, createProductWorker)
];
