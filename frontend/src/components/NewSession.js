import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class NewSession extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      classID: 'classID',
    };
  }

  createSession(classID) {
    fetch('https://anonalert.herokuapp.com/api/sessions/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      classID: classID,
      sessionID: this.props.navigation.state.params.sessionID
    })
  })
    alert("You've created a new session!")
  }

  render() {
    return (
      <View style = {styles.bigView}>
        <View style = {styles.container}/>
        <View style = {styles.container}>
          <TextInput
            onChangeText={(text) => this.setState({classID: text})}
            value={this.state.classID}
          />
          <View style = {styles.buttonContainerStyle}> 
            <TouchableOpacity onPress={() => this.createSession(this.state.classID)}> 
              <Text style= { styles.centerText }>
                Create Session
              </Text>
            </TouchableOpacity> 
          </View>
        </View>
        <View style = {styles.container}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
