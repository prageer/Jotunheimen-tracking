import React, {Component} from 'react';
import ReactNative from 'react-native';
import ButtonCircle from '../components/ButtonCircle';
import InputText from '../components/InputText';
import InputTextArea from '../components/InputTextArea';
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
  ScrollView,
  TouchableOpacity
} = ReactNative;

import activities from '../constants/activities';
import participants from '../constants/participants';
import mark from '../constants/mark';
import negatives from '../constants/negatives';
import experienceMark from '../constants/experienceMark';

/**
 * Container component for TrackingSurvey page
 */
class TrackingSurvey extends Component {

  /**
    * TrackingSurvey Container Constructor
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
   * Render TrackingSurvey
   * @return {jsxresult} result in jsx format
   */
  render() {    
    let genderList = activities.map((item, key)=>{
      return {'label': item.name, value: key};
    });    
    let participantsList = participants.map((item, key)=>{
      return {'label': item.name, value: key};
    });
    let markList = mark.map((item, key)=>{
      return {'label': item.name, value: key};
    });
    let negativesList = negatives.map((item, key)=>{
      return {'label': item.name, value: key};
    });
    let experienceMarkList = experienceMark.map((item, key)=>{
      return {'label': item.name, value: key};
    });

    return (
      <View
        style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.headTextContainer}>Your visit today:</Text>            
            <View style={styles.item}>
              <Text style={styles.questionTextContainer}>7. What nature-based activites did you participate in during the tracking today? Click multiple if relevant</Text>
              <ItemList items={genderList} />
            </View>
            <View style={styles.item}>
              <Text style={styles.questionTextContainer}>8. With whom did you conduct these activities today?</Text>
              <Text style={styles.questionTextContainer}>choose only 1</Text>
              <ItemList items={participantsList} />
            </View>
            <View style={styles.item}>
              <Text style={styles.questionTextContainer}>9. The visit today has been important for...</Text>
              <Text style={styles.questionTextContainer}>1. Learning about the nature</Text>
              <ItemList items={markList} />
              <Text style={styles.questionTextContainer}>2. being together with my family/friends</Text>
              <ItemList items={markList} />
              <Text style={styles.questionTextContainer}>3. my physical/mental health</Text>
              <ItemList items={markList} />
              <Text style={styles.questionTextContainer}>4. inspiring me to create crafts, stories or other artistic work</Text>
              <ItemList items={markList} />
              <Text style={styles.questionTextContainer}>5. Nurturing a deeper meaning of nature; emotionally or spiritually</Text>
              <ItemList items={markList} />
            </View>
            <View style={styles.item}>
              <Text style={styles.questionTextContainer}>10. My experience today was negatively impacted by:</Text>
              <ItemList items={negativesList} />
            </View>
            <View style={styles.item}>
              <Text style={styles.questionTextContainer}>11. How would you rate your overall experience today?</Text>
              <Text style={styles.questionTextContainer}>choose only 1</Text>
              <ItemList items={experienceMarkList} />
            </View>
            <View style={styles.item}>
              <Text style={styles.questionTextContainer}>12. Leave any additional comment that you would like to make here:</Text>
              <InputTextArea multiline={true} numberOfLines={4} />              
            </View>
            <View style={styles.item}>
              <Text style={styles.questionTextContainer}>13. We would appreciate if we at a later stage could ask you few more questions. If so, please enter your email here:</Text>
              <InputText placeholder="Email" />
            </View>
            <View style={styles.item}>
              <Text style={styles.headTextContainer}>Thank you very much for your participation!</Text>
            </View>
            <View style={{marginLeft:20, marginRight:20, marginBottom:20, marginTop:20}}>
              <Button onPress={()=>{Actions.end();}}>Send</Button>
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

export default TrackingSurvey;
