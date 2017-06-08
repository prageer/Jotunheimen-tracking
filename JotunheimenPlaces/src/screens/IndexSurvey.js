import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Motion, spring} from 'react-motion';
import { Actions } from 'react-native-router-flux';

const {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = ReactNative;

/**
 * Container component for IndexSurvey page
 */
class IndexSurvey extends Component {

  /**
    * IndexSurvey Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render IndexSurvey page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    return (
      
      <View
        style={styles.container}>
        <View style={{flex:1, alignItems: 'center'}}>
          <Image style={{width: 297}} source={require('../assets/jotunheimen-logo.png')} />          
        </View>
        <View style={{flex:1}}>          
          <TouchableOpacity style={styles.button} onPress={()=>{Actions.activity();}}>
            <Text style={styles.whiteFont}>START ACTIVITY</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
          <TouchableOpacity style={[styles.button, styles.instructBtn]} onPress={()=>{Actions.instruction();}}>
            <Text style={styles.whiteFont}>INSTRUCTIONS</Text>
          </TouchableOpacity>
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
  },
  button: {
    backgroundColor: '#00743C',    
    alignItems: 'center',
    borderWidth: 0,
    width:'100%',
    height:'100%',
    justifyContent:'center'
  },
  whiteFont: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25
  },
  instructBtn: {
    backgroundColor: '#56BD2D'
  }
});

export default IndexSurvey;