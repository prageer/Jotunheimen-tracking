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

const {
  Image,
  StyleSheet,
  Text,
  View,  
  ScrollView,
  TouchableOpacity
} = ReactNative;
import likePoints from '../constants/likePoints';

/**
 * Container component for PointLike page
 */
class PointLike extends Component {

  /**
    * PointLike Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);    
  }

  /**
   * Render PointLike page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    let likePointsList = likePoints.map((item, key)=>{
      return {'label': item.name, value: key};
    });    
    
    return (
      <View
        style={styles.container}>
        <View style={{flex:1, justifyContent: 'center'}}>
          <Text>BACK</Text>
        </View>
        <View style={{flex:7, justifyContent: 'center'}}>
          <TagList items={likePointsList} />
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

export default PointLike;
