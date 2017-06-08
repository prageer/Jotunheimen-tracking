import React, { Component } from 'react';

import ReactNative from 'react-native';
const {  
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = ReactNative;

/**
 * ButtonCircle component
 */
export default class ButtonCircle extends Component {

  /**
   * Render a ButtonCircle
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
    backgroundColor: '#00743C',
    padding: 13,
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 37,
    paddingLeft: 19,
    paddingRight: 19
  },
  whiteFont: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight:50
  }
});