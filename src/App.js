import React, { Component } from "react";
import { AppContainer } from "./styles";
import {
  AddProductPage,
  HomePage,
  ProductStockPage,
  EditProductPage
} from "./pages";
import { Route, Redirect, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <AppContainer>
        <Switch>
          <Route exact path="/" component={ProductStockPage} />
          <Route exact path="/add" component={AddProductPage} />
          <Route exact path="/product/:id" component={EditProductPage} />
          <Redirect to="/" />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;
