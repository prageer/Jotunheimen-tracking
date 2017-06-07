import React, {Component} from 'react';
import ReactNative from 'react-native';
import Button from '../components/Button';
import ButtonRedFlat from '../components/ButtonRedFlat';
import { Actions } from 'react-native-router-flux';

import {Motion, spring} from 'react-motion';
const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView
} = ReactNative;

class Login extends Component {
  constructor(props){
    super(props);
  }

  render() {    
    return (
      
      <View
        style={styles.container}>
        <ScrollView >
          <Motion defaultStyle={{scale: 0.4, opacity: 0}} style={{scale: spring(1, [200, 17]), opacity: spring(1)}}>
          {m =>
            <View style={{
              opacity: m.opacity, 
              alignItems: 'center'
            }}>
              <View>
                <Text style={styles.headTextContainer}>
                  Confidentiality and Consent
                </Text>
                <Text style={styles.descTextContainer}>
                  If you consent to participate in the survey and to track your visit, your data will be analyzed together with the other visitors’ GPS data to create maps, reports and publications.
                </Text>
                <Text style={styles.descTextContainer}>
                  All personal data will be treated as personal under the Norwegian 2000 Personal Data Act, and stored securely on a server at the Arctic University of Norway until 1st March 2018 when all this data will be deleted.
                </Text>
                <Text style={styles.descTextContainer}>
                  The data will be treated as confidential and will not be passed on to any other party. No personally identifiable information will be used in reports or publications.
                </Text>
                <Text style={styles.descTextContainer}>
                  For any queries please contact Lorena Muñoz lorena.munoz@uit.no or Vera Hausner vera.hausner@uit.no
                </Text>                
              </View>
            </View>
          }
          </Motion>
        </ScrollView>
        <View>
          <Text style={{height:30}}>                
          </Text>
          <Button onPress={()=>Actions.demographics()}>Accept Terms</Button>
          <Text style={{height:10}}>                
          </Text>
          <ButtonRedFlat onPress={()=>{}}>Exit the Survey</ButtonRedFlat>
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
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  headTextContainer: {
    color: '#00743d',
    fontSize: 20,    
    fontWeight:'bold'
  },
  descTextContainer: {
    color: '#00743d',
    fontSize: 18,    
    marginTop:5
  },
  ovalText: {
    color:'white',
    fontSize: 34,
    lineHeight:55,
    textAlign:'center'
  }
});

export default Login;