import React, { Component } from "react";
import { AppContainer } from "./styles";
import {
  AddProductPage,
  ProductStockPage,
  EditProductPage,
  HomePage
} from "./pages";
import { Route, Redirect, Switch } from "react-router-dom";
import Loading from "./components/loading";
import { connect } from "react-redux";

const WrappedLoadingSpinner = connect(({ app }) => ({
  isLoading: app.isLoading
}))(({ isLoading }) => isLoading && <Loading />);

class App extends Component {
  render() {
    return (
      <AppContainer>
        <WrappedLoadingSpinner />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductStockPage} />
          <Route exact path="/add" component={AddProductPage} />
          <Route exact path="/product/:id" component={EditProductPage} />
          <Redirect to="/" />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;
