import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'

import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore'

const store = configureStore();

export default class JotunheimenPlaces extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('JotunheimenPlaces', () => JotunheimenPlaces);
