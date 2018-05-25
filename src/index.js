import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import './styles/global';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

if (module.hot) {
	module.hot.accept();
}

const store = configureStore();
store.runSaga();

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();