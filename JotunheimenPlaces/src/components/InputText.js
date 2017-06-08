import React, { Component } from 'react';

import ReactNative from 'react-native';
const {  
  StyleSheet,
  Text,
  View,
  TextInput
} = ReactNative;

/**
 * InputText component
 */
export default class InputText extends Component {

  /**
   * Render InputText
   * @return {jsxresult} result in jsx format
   */
	render() {
		return (
			<View style={styles.button}>
          {
            this.props.floattext !="" && 
            (
              <Text style={styles.floatText}>{this.props.floattext}</Text>
            )
          }
				  <TextInput 
            style={styles.whiteFont}
            underlineColorAndroid="transparent"
            placeholder={this.props.placeholder}
          />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  button: {
    padding: 15,    
    paddingLeft: 0,
    borderWidth: 0,
    marginLeft:20
  },
  whiteFont: {
    borderColor: '#00743C',
    borderWidth: 1,
    color: 'black',    
    fontSize: 18,
    height:40,
    paddingLeft:10
  },
  floatText: {
    color: '#00743C',
    fontSize: 18
  }
});