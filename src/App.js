import React, { Component } from 'react';
import { AppContainer } from './styles'
import { AddProductPage } from './pages';

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
