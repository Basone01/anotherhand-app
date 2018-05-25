import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

export default function configureStore() {
	const reduxSagaMiddleware = createSagaMiddleware();
	const store = createStore(reducers, applyMiddleware(reduxSagaMiddleware));

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('./reducers', () => {
		  const nextRootReducer = require('./reducers/index');
		  store.replaceReducer(nextRootReducer);
		});
	}
	
	return {
		...store,
		runSaga: () => reduxSagaMiddleware.run(rootSaga)
	};
}
