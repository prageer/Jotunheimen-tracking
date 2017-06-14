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
import {connect} from 'react-redux';
import {setLocalToFirebase} from './utils/firebase';

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
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setLocalToFirebase( this.props.personalInfo, this.props.pointInfo, this.props.surveyInfo );
  }

  /**
   * Render a page(screen)
   * @return {jsxresult} result in jsx format
   */
  render() {

    let welcomeInitial = false;
    let indexSurveyInitial = false;
    if(this.props.personalInfo.iResidence == undefined)
      welcomeInitial = true;
    else
      indexSurveyInitial = true;

    return ( 
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="instruction" component={Instruction} />
          <Scene key="welcome" component={Welcome} initial={welcomeInitial} />
          <Scene key="consent" component={Consent} />
          <Scene key="demographics" component={Demographics} />
          <Scene key="indexsurvey" component={IndexSurvey} initial={indexSurveyInitial} />
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

/**
 * Map Redux store state to component props
 * @param {state} state Redux store state
 * @return {json} state json State from redux store state
 */
const mapStateToProps = (state) => {    
  return {
    personalInfo: state.demographics.personalInfo,
    pointInfo: state.point.pointInfo,
    surveyInfo: state.survey.surveyInfo
  };
};

export default connect(mapStateToProps, null)(App);
