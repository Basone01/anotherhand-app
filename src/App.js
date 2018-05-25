import React, { Component } from 'react';
import { AppContainer } from './styles'
import { AddProductPage } from './pages';
import * as types from './store/types';
import {connect} from 'react-redux'
class App extends Component {

  
  render() {
    return (
      <AppContainer>
        <AddProductPage />
      </AppContainer>
    );
  }
}

export default App;
