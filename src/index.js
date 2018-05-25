import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import './styles/global';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();
store.runSaga();

render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
