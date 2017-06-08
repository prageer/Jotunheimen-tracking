import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Motion, spring} from 'react-motion';
import { Actions } from 'react-native-router-flux';
import ButtonRedFlat from '../components/ButtonRedFlat';
import ButtonRedBorder from '../components/ButtonRedBorder';
import Modal from 'react-native-modalbox';

const {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
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
  constructor(props){
    super(props);
  }

  /**
   * Render Activity page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    return (
      
      <View
        style={styles.container}>
        <View style={{flex: .2, alignItems: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={()=>{}}>
            <Text style={styles.whiteFont}>I LIKE THIS AREA</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: .2}}>          
          <TouchableOpacity style={[styles.button, styles.redBtn]} onPress={()=>{}}>
            <Text style={styles.whiteFont}>I DISLIKE THIS AREA</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: .3}}>
          <Text style={styles.descText}>
            Track your activity. The activity could take from few minutes joggin, fishing, hiking... to several days backpacking in nature for several days. Do not stop tracking until you completely finish the activity. Mark interesting waypoints and tag non-material benefits.
          </Text>
        </View>
        <View style={{flex: .3}}>
          <ButtonRedBorder onPress={()=>{this.refs.modal3.open()}}>FINISH ACTIVITY</ButtonRedBorder>
          <View style={{height:20}}>
          </View>
          <ButtonRedFlat onPress={()=>{Actions.indexsurvey();}}>Cancel</ButtonRedFlat>
        </View>

        <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} >
          <Text style={{color:'black', marginBottom: 20, fontSize: 15}}>Are you sure you want to end journey and send the waypoints?</Text>
          <TouchableOpacity style={{margin: 20, borderWidth: 2,borderRightWidth: 4, borderBottomWidth: 4}} onPress={()=>{Actions.trackingsurvey();}}>
            <Text style={{color:'black', padding:10}}>Yes, end journey and go to questionnaries</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:20}} onPress={()=>{ this.refs.modal3.close() }} >
            <Text style={{color:'blue'}} >No, continue adding waypoints</Text>
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
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#00743C',
    alignItems: 'center',
    borderWidth: 0,
    width:'100%',
    height:'100%',
    justifyContent:'center'
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

export default Activity;