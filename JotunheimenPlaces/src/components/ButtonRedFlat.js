import React, { Component } from 'react';

import ReactNative from 'react-native';
const {  
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = ReactNative;

export default class ButtonRedFlat extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
				  <Text style={styles.whiteFont}>{this.props.children}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
  button: {    
    padding: 15,
    alignItems: 'center',
    borderWidth: 0
  },
  whiteFont: {
    color: 'red',    
    fontSize: 18
  }
});