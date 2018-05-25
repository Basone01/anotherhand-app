import React, { Component } from 'react';
import { AppContainer } from './styles';
import { AddProductPage, HomePage } from './pages';
import { Route, Redirect, Switch } from 'react-router-dom';
class App extends Component {
	render() {
		return (
			<AppContainer>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/add" component={AddProductPage} />
					<Redirect to="/" />
				</Switch>
			</AppContainer>
		);
	}
}

export default App;
