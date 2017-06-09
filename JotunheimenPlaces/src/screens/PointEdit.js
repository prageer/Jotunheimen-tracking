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
class PointEdit extends Component {

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
            <ButtonCircle onPress={()=>{Actions.activity({mode:mode})}} backgroundColor="white">{backStr}</ButtonCircle>
          </View>
          <View style={{flex:0.7, justifyContent:'center', alignItems:'flex-end'}}>
            <TouchableOpacity>
              <Image style={{resizeMode: 'contain', height:30}} source={require('../assets/del.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:7, justifyContent: 'center'}}>
          <TagList items={likePointsList} mode={mode} />
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

export default PointEdit;
