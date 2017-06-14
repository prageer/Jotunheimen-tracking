import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Motion, spring} from 'react-motion';
import { Actions } from 'react-native-router-flux';
import ButtonRedFlat from '../components/ButtonRedFlat';
import ButtonRedBorder from '../components/ButtonRedBorder';
import Modal from 'react-native-modalbox';

import {connect} from 'react-redux';

const {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ScrollView
} = ReactNative;

/**
 * Container component for Activity page
 */
class Activity extends Component {

  /**
    * Activity Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props) {
    super(props);
  }

  /**
   * Render Activity page
   * @return {jsxresult} result in jsx format
   */
  render() {   

    const {pointInfo}  = this.props;
    let likeList = null;

    likeList = pointInfo.map((item, index)=>{
      if( item.stage != this.props.stage )
        return null;

      let activityMode = item.mode;
      let smileIcon = null;
      if( activityMode == "like"){
        smileIcon = ( <Image style={{resizeMode: 'contain', height:30}} source={require('../assets/smile-small.png')} /> );
      }else{
        smileIcon = ( <Image style={{resizeMode: 'contain', height:30}} source={require('../assets/sad-small.png')} /> );
      }

      let pointText = "";
      for(var key in item){
        if( key == "dateTime" || key == "mode" || key == "lat" || key == "lang")
          continue;
        pointText += item[key] + ", ";
      }
      pointText = pointText.slice(0, -2);

      return (
        <TouchableOpacity key={index} onPress={()=>{Actions.pointedit({mode: activityMode, selectedIndex: index }) }}>
          <View style={{flex:1, flexDirection: 'row', marginBottom:10}}>
            <View style={{flex:0.2, justifyContent:'center', alignItems:'center'}}>
              {smileIcon}
            </View>
            <View style={{flex:0.8, justifyContent:'center'}}>
              <Text>{item.dateTime}</Text>              
              <Text style={{marginRight:20}}>{pointText}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    });

    likeList = likeList.filter(function(n){ return n != null });

    return (
      
      <View
        style={styles.container}>
        <ScrollView>
          <View style={{}}>
            <TouchableOpacity style={styles.button} onPress={()=>{Actions.pointlike({mode:'like'});}}>
              <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex:0.3, justifyContent:'center', alignItems:'center'}}>
                  <Image style={{resizeMode: 'contain', height:'80%'}} source={require('../assets/smile-big.png')} />
                </View>
                <View style={{flex:0.7, justifyContent:'center'}}>
                  <Text style={styles.whiteFont}>I LIKE THIS AREA</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{}}>          
            <TouchableOpacity style={[styles.button, styles.redBtn]} onPress={()=>{Actions.pointlike({mode:'dislike'});}}>
              <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex:0.3, justifyContent:'center', alignItems:'center'}}>
                  <Image style={{resizeMode: 'contain', height:'80%'}} source={require('../assets/sad-big.png')} />
                </View>
                <View style={{flex:0.7, justifyContent:'center'}}>
                  <Text style={styles.whiteFont}>I DISLIKE THIS AREA</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <Text style={styles.descText}>
              Track your activity. The activity could take from few minutes joggin, fishing, hiking... to several days backpacking in nature for several days. Do not stop tracking until you completely finish the activity. Mark interesting waypoints and tag non-material benefits.
            </Text>
          </View>
          <View style={{}}>
            <ButtonRedBorder onPress={()=>{this.refs.modal3.open()}}>FINISH ACTIVITY</ButtonRedBorder>
            <View style={{height:20}}>
            </View>
            {( likeList.length == 0 ) && (<ButtonRedFlat onPress={()=>{Actions.indexsurvey();}}>Cancel</ButtonRedFlat> )}
          </View>
          
          {(likeList.length != 0 ) && likeList}
          
        </ScrollView>

        <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} >
          <Text style={{color:'black', marginBottom: 20, fontSize: 18, textAlign: 'center'}}>Are you sure you want to end journey and send the waypoints?</Text>
          <TouchableOpacity style={{margin: 20, borderWidth: 2,borderRightWidth: 4, borderBottomWidth: 4}} onPress={()=>{Actions.trackingsurvey();}}>
            <Text style={{color:'black', padding: 10, fontSize: 15, textAlign: 'center'}}>Yes, end journey and go to questionnaries</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:20}} onPress={()=>{ this.refs.modal3.close() }} >
            <Text style={{color:'blue', fontSize: 15}} >No, continue adding waypoints</Text>
          </TouchableOpacity>
        </Modal>
      </View>
      
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',    
    flexDirection: 'column',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#00743C',    
    borderWidth: 0,
    width:'100%',
    height:100
  },
  redBtn: {
    backgroundColor: 'red'
  },
  whiteFont: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25
  },
  descText: {
    color: '#00743C',
    margin:20,
    marginRight:15,
    lineHeight:24,
    fontSize:14
  },
  instructBtn: {
    backgroundColor: 'green'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,    
    borderColor: 'black',    
    padding:20
  },
  modal3: {
    height: 300,
    width: '85%'
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
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

export default connect(mapStateToProps, null)(Activity);
