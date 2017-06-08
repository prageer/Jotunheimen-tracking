import React, { Component } from 'react';

import ReactNative from 'react-native';
const {  
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = ReactNative;

/**
 * ButtonRedBorder component
 */
export default class ButtonRedBorder extends Component {

  /**
   * Render ButtonRedBorder
   * @return {jsxresult} result in jsx format
   */
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
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    marginLeft:20,
    marginRight:20
  },
  whiteFont: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 24
  }
});