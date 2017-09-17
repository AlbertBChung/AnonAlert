import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class StudentSide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style = { styles.titleText }>
          What the hell?
        </Text>
        <View style = { styles.outerircle }>
          <TouchableHighlight style = { styles.circle } underlayColor='red' 
            onPress={() => { console.log("do stuff") }} >
            <View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 26
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200/2,
    backgroundColor: 'green'
},
  outerircle: {
    width: 250,
    height: 250,
    borderRadius: 250/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
