import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Home from './screens/Home';
import Login from './screens/Login';
import Instruction from './screens/Instruction';
import Demographics from './screens/Demographics';

const { StyleSheet, Text, View} = ReactNative;

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {

    return ( 
      <Router>
        <Scene key="root" hideNavBar={true}>                              
          <Scene key="home" component={Home} initial={true} />
          <Scene key="instruction" component={Instruction} />
          <Scene key="login" component={Login} />
          <Scene key="demographics" component={Demographics}  />
        </Scene>
      </Router>
    );
  }
}

export default App;