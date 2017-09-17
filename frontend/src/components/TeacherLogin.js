import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class TeacherLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: 'username',
      password: 'password',
      sessionID: 'sessionID',
    };
  }

  login(sessionID) {
    fetch('https://anonalert.herokuapp.com/api/users/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: 'Alexander',
      lastName: 'Greenbug',
      username: 'atg73@cornell.edu',
      password: 'ggitmQQ'
    })
  })
  this.props.navigation.navigate('TeacherSide', {sessionID: sessionID} )
  }

  render() {
    return (
      <View style = {styles.bigView}>
        <View style = {styles.container}/>
        <View style = {styles.container}>
          <TextInput
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.username}
          />
          <TextInput
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />
          <TextInput
            onChangeText={(text) => this.setState({sessionID: text})}
            value={this.state.sessionID}
          />
          <View style = {styles.buttonContainerStyle}> 
            <TouchableOpacity onPress={() => this.login(this.state.sessionID)}> 
              <Text style= { styles.centerText }>
                Login
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
