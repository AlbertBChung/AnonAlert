import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';


export default class TeacherLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'username',
      password: 'password',
      firstName: 'firstName',
      lastName: 'lastName'
    };

  }
  render() {
    return (
      <View>
        <FormLabel containerStyle={styles.labelContainerStyle}>
          Teacher Login
        </FormLabel>
        <FormInput
        ref="form2"
        containerRef="containerRefYOYO"
        textInputRef="textInputRef"
        placeholder="Email"
        inputStyle={styles.inputs}
        />
        <FormInput
        ref="form2"
        containerRef="containerRefYOYO"
        textInputRef="textInputRef"
        placeholder="Password"
        inputStyle={styles.inputs}
        />
        <FormInput
        ref="form2"
        containerRef="containerRefYOYO"
        textInputRef="textInputRef"
        placeholder="First Name"
        inputStyle={styles.inputs}
        />
        <FormInput
        ref="form2"
        containerRef="containerRefYOYO"
        textInputRef="textInputRef"
        placeholder="Last Name"
        inputStyle={styles.inputs}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  labelContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    padding: 20,
  },
  centerText: {
    textAlign: 'center',
  },
  buttonContainerStyle: {
    justifyContent: 'center',
  },
  bigView: {
    flexDirection: "row",
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});
