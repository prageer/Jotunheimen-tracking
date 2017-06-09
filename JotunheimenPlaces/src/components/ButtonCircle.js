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

    let btnStyle = [styles.button];
    let txtStyle = [styles.whiteFont];
    if( this.props.backgroundColor=="white" ){
      btnStyle = [styles.button, styles.backWhite];
      txtStyle = [styles.whiteFont, styles.colorBlack]
    }

		return (
			<TouchableOpacity style={btnStyle} onPress={this.props.onPress}>
				<Text style={txtStyle}>{this.props.children}</Text>
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
  backWhite: {
    backgroundColor: 'white',
    borderWidth:1
  },
  whiteFont: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight:40
  },
  colorBlack: {
    color: 'black'
  }
});