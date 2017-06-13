import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Welcome from './screens/Welcome';
import Consent from './screens/Consent';
import Instruction from './screens/Instruction';
import Demographics from './screens/Demographics';
import IndexSurvey from './screens/IndexSurvey';
import Activity from './screens/Activity';
import TrackingSurvey from './screens/TrackingSurvey';
import End from './screens/End';
import PointLike from './screens/PointLike';
import PointEdit from './screens/PointEdit';

const { StyleSheet, Text, View} = ReactNative;

/**
 * High Level Container
 */
class App extends Component {

  /**
    * App Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render a page(screen)
   * @return {jsxresult} result in jsx format
   */
  render() {

    return ( 
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="welcome" component={Welcome} />
          <Scene key="instruction" component={Instruction} />
          <Scene key="consent" component={Consent} />
          <Scene key="demographics" component={Demographics} initial={true}  />
          <Scene key="indexsurvey" component={IndexSurvey} />
          <Scene key="activity" component={Activity} />
          <Scene key="trackingsurvey" component={TrackingSurvey} />
          <Scene key="end" component={End} />
          <Scene key="pointlike" component={PointLike} />
          <Scene key="pointedit" component={PointEdit} />
        </Scene>
      </Router>
    );
  }
}

export default App;