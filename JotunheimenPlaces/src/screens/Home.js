import React, {Component} from 'react';
import ReactNative from 'react-native';
import ButtonCircle from '../components/ButtonCircle';
import {Motion, spring} from 'react-motion';
import { Actions } from 'react-native-router-flux';

const {
  Image,
  StyleSheet,
  Text,
  View
} = ReactNative;

class Home extends Component {
  constructor(props){
    super(props);

    this.orientation = 'landscape';
  }
  render() {    
    return (
      
      <View
        style={styles.container}>
        <View style={{flex:4, justifyContent: 'center'}}>
          <Motion defaultStyle={{scale: 0.4, opacity: 0}} style={{scale: spring(1, [200, 17]), opacity: spring(1)}}>
          {m =>
            <View style={{
              opacity: m.opacity, 
              alignItems: 'center'
            }}>
              <Image style={{width: 297, transform: [{scale: m.scale}], marginBottom:30}} source={require('../assets/jotunheimen-logo.png')} />
              <View>
                <Text style={styles.logoTextContainer}>Welcome to our Nature-Based Tourism App!</Text>
                <Text style={styles.descTextContainer}>We want to improve nature-based tourism in Norway. We appreciate if you could spend a few minutes to map your sites and share your experiences. </Text>
              </View>
            </View>
          }
          </Motion>
        </View>

        {this.orientation=='portrait' &&
          (
          <View style={{flex:1}}>
          </View>
          )
        }

        <View style={{flex:1, alignItems:'center'}}>
          <Motion defaultStyle={{scale: 0.4, opacity: 0}} style={{scale: spring(1, [200, 17]), opacity: spring(1)}}>
          {m =>
            <ButtonCircle onPress={()=>Actions.login()}>>></ButtonCircle>
          }
          </Motion>
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
  logoTextContainer: {
    color: '#00743d',
    fontSize: 20,
    textAlign: 'center',
    fontWeight:'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginLeft:20,
    marginRight:15
  },
  descTextContainer: {
    color: '#00743d',
    fontSize: 18,
    textAlign: 'center',
    marginTop:20,
    marginLeft:20,
    marginRight:15
  },
  ovalText: {
    color:'white',
    fontSize: 34,
    lineHeight:55,
    textAlign:'center'
  }
});

export default Home;