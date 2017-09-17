import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TeacherSide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.circle }>
          <Text style= { styles.displayText }>
            9
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200/2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
},
  displayText: {
    fontSize: 38,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
