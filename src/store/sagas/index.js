import { all } from 'redux-saga/effects';
import productWatcher from './products';

export default function* rootSaga() {
	yield all([ ...productWatcher ]);
}
