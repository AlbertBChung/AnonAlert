import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';


export default class SessionID extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: '#1BA39C'}} />
          <View style={{flex: 2, backgroundColor: '#0B8389'}} />
          <View style={{flex: 3, backgroundColor: '#0F6177'}} />
          <FormLabel containerStyle={styles.labelContainerStyle}>
            Join a Session
            </FormLabel>
            <FormInput
            ref="form2"
            containerRef="containerRefYOYO"
            textInputRef="textInputRef"
            placeholder="Enter Session ID"
            onChangeText={() => this.props.navigation.navigate('StudentSide')}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  labelcontainerStyle: {
    top: -25,
    height: 100,
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  backdrop: {
    zIndex: 0,
    backgroundColor: 'transparent',
    position: 'absolute'
  }
});
