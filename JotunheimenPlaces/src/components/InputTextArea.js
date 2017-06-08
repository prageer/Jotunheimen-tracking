import React, { Component } from 'react';

import ReactNative from 'react-native';
const {  
  StyleSheet,
  Text,
  View,
  TextInput
} = ReactNative;

/**
 * InputTextArea component
 */
export default class InputTextArea extends Component {

  /**
   * Render InputTextArea
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
            multiline = {true}
            numberOfLines = {4}
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
    paddingLeft:10
  },
  floatText: {
    color: '#00743C',
    fontSize: 18
  }
});