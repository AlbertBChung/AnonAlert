import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ListView } from 'react-native';

export default class ViewSession extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      classID: 'classID',
    };
  }

  getSession(classID) {
    return fetch('https://anonalert.herokuapp.com/api/users/')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
        <View style = {styles.bigView}>
        <View style = {styles.container}/>
        <View style = {styles.container}>
          <TextInput
            onChangeText={(text) => this.setState({sessionID: text})}
            value={this.state.classID}
          />
          <View style = {styles.buttonContainerStyle}> 
            <TouchableOpacity onPress={() => this.getSession(this.state.classID)}> 
              <Text style= { styles.centerText }>
                Find Sessions
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