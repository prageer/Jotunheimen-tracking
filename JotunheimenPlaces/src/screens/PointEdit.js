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

import likePoints from '../constants/likePoints';
import {connect} from 'react-redux';
import {  
  delPoint,
  editPoint
} from '../actions/point';
import {delPointToFirebase, setPointToFirebase} from '../utils/firebase';
import config from '../../config';

const {
  Image,
  StyleSheet,
  Text,
  View,  
  ScrollView,
  TouchableOpacity,
  Alert
} = ReactNative;

/**
 * Container component for PointLike page
 */
class PointEdit extends Component {

  /**
    * PointLike Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
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

    let selectedIndex = this.props.selectedIndex;
    let pointInfo = this.props.pointInfo;
    let dateTime = pointInfo[selectedIndex]["dateTime"];

    this.info["dateTime"] = dateTime;
    this.info["mode"] = this.props.mode;

    this.info["lat"] = this.location.lat;
    this.info["lang"] = this.location.lang;
    this.info["stage"] = this.props.stage;
    
    setPointToFirebase(this.info, dateTime);

    this.props.editPoint(this.info, this.props.selectedIndex);

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
    * delete an Item
    * @return {void}
    */
  deletePoint(){

    Alert.alert(
      config.DEL_TRACK_TITLE,
      config.DEL_TRACK_CNT,
      [
        {text: 'Cancel', onPress: () => {} },
        {text: 'OK', onPress: () => { 

          let selectedIndex = this.props.selectedIndex;
          let pointInfo = this.props.pointInfo;    
          
          this.props.delPoint(this.props.selectedIndex);
          delPointToFirebase(pointInfo[selectedIndex]["dateTime"], pointInfo[selectedIndex]["stage"]);
          Actions.activity();

        } },
      ]
    )    
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
        <View style={{flex:1.5,  flexDirection: 'row', justifyContent: 'space-between', marginLeft:20, marginRight:20}}>
          <View style={{flex:0.3, justifyContent:'center', alignItems:'center'}}>
            <ButtonCircle onPress={this.onBackToActivity.bind(this)} backgroundColor="white">{backStr}</ButtonCircle>
          </View>
          <View style={{flex:0.7, justifyContent:'center', alignItems:'flex-end'}}>
            <TouchableOpacity onPress={this.deletePoint.bind(this)}>
              <Image style={{resizeMode: 'contain', height:30}} source={require('../assets/del.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:7, justifyContent: 'center'}}>
          <TagList
            items={likePointsList}
            mode={mode}
            getPoint={this.getPoint.bind(this)}
            selectedIndex={this.props.selectedIndex}
            pointData={this.props.pointInfo[this.props.selectedIndex]}
          />
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
    pointInfo: state.point.pointInfo,
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
    delPoint: (pointIndex) => {
      return dispatch(delPoint(pointIndex));
    },
    editPoint: (pointInfo, pointIndex) => {
      return dispatch(editPoint(pointInfo, pointIndex));      
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PointEdit);
