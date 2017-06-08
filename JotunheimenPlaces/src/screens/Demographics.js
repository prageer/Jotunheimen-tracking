import React, {Component} from 'react';
import ReactNative from 'react-native';
import ButtonCircle from '../components/ButtonCircle';
import InputText from '../components/InputText';
import SelectBox from '../components/SelectBox';
import ItemList from '../components/ItemList';
import Button from '../components/Button';
import {Motion, spring} from 'react-motion';
import { Actions } from 'react-native-router-flux';
const {
  Image,
  StyleSheet,
  Text,
  View,  
  ScrollView
} = ReactNative;
import gender from '../constants/gender';
import education from '../constants/education';
import tax from '../constants/tax';

/**
 * Container component for Demographics page
 */
class Demographics extends Component {

  /**
    * Demographics Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);

    this.orientation = 'landscape';
    this.state={
      language:''
    }
  }

  /**
   * Render Demographics page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    let genderList = gender.map((item, key)=>{
      return {'label': item.name, value: key};
    });
    let educationList = education.map((item, key)=>{
      return {'label': item.name, value: key};
    })
    let taxList = tax.map((item, key)=>{
      return {'label': item.name, value: key};
    })

    return (
      <View
        style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.headTextContainer}>Personal Information</Text>
            <View style={styles.item}>
              <Text style={styles.questionTextContainer}>1. What is your country of residence?</Text>
              <Text style={styles.questionTextContainer}>Choose only 1</Text>
              <InputText placeholder="Post code" floattext="Norway? Postal code:" />
              <SelectBox placeholder="Other Country" floattext="Other Country:" />
            </View>
            <View style={styles.item}>
              <Text style={styles.questionTextContainer}>2. What is your gender?</Text>
              <ItemList items={genderList} />
            </View>
            <View style={styles.item}>
              <Text style={styles.questionTextContainer}>3. What is your age?</Text>
              <InputText placeholder="Age" />
            </View>
            <View style={styles.item}>
              <Text style={styles.questionTextContainer}>4. What is the highest education level you have completed?</Text>
              <Text style={styles.questionTextContainer}>Choose only 1</Text>
              <ItemList items={educationList} />
            </View>
            <View style={styles.item}>
              <Text style={styles.questionTextContainer}>5. What was the approximate total after-tax income of your household for year 2014?</Text>
              <Text style={styles.questionTextContainer}>Choose only 1 [optional question]</Text>              
              <ItemList items={taxList} />
            </View>
            <View style={styles.item}>
              <Text style={styles.questionTextContainer}>6. How many times in the past have you visited this area?</Text>
              <InputText />
            </View>
            <View style={styles.item}>
              <Text style={styles.headTextContainer}>Now you are ready to track your activity. Please do not stop tracking until you completely finish the activity. We would like you to create waypoints of places and tag them according to what you like or dislike in the place.</Text>
            </View>
            <View style={{marginLeft:20, marginRight:20, marginBottom:20, marginTop:20}}>
              <Button onPress={()=>Actions.indexsurvey()}>Start activity</Button>              
            </View>
          </View>
        </ScrollView>
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
  headTextContainer: {
    color: '#00743d',
    fontSize: 20,    
    fontWeight:'bold',
    fontStyle: 'normal',
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20
  },
  questionTextContainer: {
    color: 'red',
    fontSize: 20,
    marginLeft:20,
    marginRight:20
  },
  item:{
    marginBottom:20,
    marginTop:20
  }
});

export default Demographics;