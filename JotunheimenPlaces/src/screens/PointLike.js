import React, {Component} from 'react';
import ReactNative from 'react-native';
import ButtonCircle from '../components/ButtonCircle';
import InputText from '../components/InputText';
import InputTextArea from '../components/InputTextArea';
import SelectBox from '../components/SelectBox';
import TagList from '../components/TagList';
import Button from '../components/Button';
import {Motion, spring} from 'react-motion';
import { Actions } from 'react-native-router-flux';

import {connect} from 'react-redux';
import {  
  setPoint
} from '../actions/point';
import {setPointToFirebase} from '../utils/firebase';
import likePoints from '../constants/likePoints';

const {
  Image,
  StyleSheet,
  Text,
  View,  
  ScrollView,
  TouchableOpacity
} = ReactNative;

/**
 * Container component for PointLike page
 */
class PointLike extends Component {

  /**
    * PointLike Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props) {
    super(props);
    this.info = [];
    this.location = {
      "lat": 0,
      "lang": 0
    }
  }

  /**
    * Handle back event
    * save info into State, Firebase
    * @return {void}
    */
  onBackToActivity() {
    let dateTime = Math.floor(Date.now() / 1000);
    this.info["dateTime"] = dateTime;
    this.info["mode"] = this.props.mode;

    this.info["lat"] = this.location.lat;
    this.info["lang"] = this.location.lang;
    this.info["stage"] = this.props.stage;
    
    setPointToFirebase(this.info, dateTime);
    this.props.setPoint(this.info);
    
    Actions.activity();
  }

  /**
    * Get point items from tagList
    * @param {json} points Selected Point items.
    * @return {void}
    */
  getPoint(points) {
    this.info = points;    
  }

  componentDidMount(){    

    navigator.geolocation.getCurrentPosition(
      (position) => {        
        this.location.lat = parseFloat(position.coords.latitude);
        this.location.lang = parseFloat(position.coords.longitude);
      },
      (error) => {
        this.location.lat = 0;
        this.location.lang = 0;
      },
      { enableHighAccuracy: false }
    );
  }

  /**
   * Render PointLike page
   * @return {jsxresult} result in jsx format
   */
  render() {

    const {mode} = this.props;

    let backStr = "<<";

    let likePointsList = likePoints.map((item, key)=>{
      return {'label': item.name, value: key};
    });
    
    return (
      <View
        style={styles.container}>
        <View style={{flex:1.5, alignItems:'center', flexDirection: 'row', marginLeft:20}}>
          <ButtonCircle onPress={this.onBackToActivity.bind(this)} backgroundColor="white">{backStr}</ButtonCircle>
        </View>
        <View style={{flex:7, justifyContent: 'center'}}>
          <TagList items={likePointsList} mode={mode} getPoint={this.getPoint.bind(this)} />
        </View>          
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',    
    flexDirection: 'column',
    justifyContent: 'space-between'    
  }  
});

/**
 * Map Redux store state to component props
 * @param {state} state Redux store state
 * @return {json} state json State from redux store state
 */
const mapStateToProps = (state) => {    
  return {
    stage: state.survey.stage
  };
};

/**
 * Map Redux dispatches to component props
 * @param {object} dispatch Redux dispatches
 * @return {json} dispatch-json from redux dispatche
 */
const mapDispatchToProps = (dispatch) => {
  return {
    setPoint: (pointInfo) => {
      return dispatch(setPoint(pointInfo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PointLike);
