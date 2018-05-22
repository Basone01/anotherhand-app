import React, { Component } from 'react';
import { connect } from 'react-redux'
import { initMockupData } from './store/actions';
import { AppContainer } from './styles'
const mockupProductData = [
  {
    "_id": "5b043f350bd1ae01c9911465",
    "price": 1390,
    "images": [require('./images/testImage.jpg')],
    "date_created": "2018-05-22T16:02:02.145Z",
    "tags": [
      "Nike", "Running"
    ],
    "name": "Nike Flex Contact (GS)",
    "size_type": "us",
    "sizes": [
      {
        "stock": 2,
        "sold": 10,
        "_id": "5b043f350bd1ae01c9911468",
        "size": 6
      }, {
        "stock": 2,
        "sold": 7,
        "_id": "5b043f350bd1ae01c9911467",
        "size": 7
      }
    ],
    "shop_id": "5aef68434619c318f8343d89"
  }
]

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this
        .props
        .init(mockupProductData)
    }, 3000);
  }

  render() {
    return (
      <AppContainer>
        Hi!
      </AppContainer>
    );
  }
}

export default connect(state => ({ test: state.test }), dispatch => ({
  init: (data) => dispatch(initMockupData(data))
}))(App);
