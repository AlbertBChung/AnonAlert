import React, { Component } from 'react' ;
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native' ;
import { StackNavigator} from 'react-navigation' ;
import SessionID from './src/components/SessionID' ;
import StudentSide from './src/components/StudentSide' ;
import TeacherLogin from './src/components/TeacherLogin' ;
import TeacherSide from './src/components/TeacherSide' ;


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style = { styles.titleText }>
          Welcome to AnonAlert
        </Text>
        <Text style = { styles.titleText }>
          Sign in here
        </Text>
        <View style = { styles.columnStyle }>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Student')}>
            <Text style = { styles.buttonText }>
              Student
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Teacher')} >
            <Text style = { styles.buttonText }>
              Teacher
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const TeacherNav = StackNavigator (
  {
    Home: {
      screen: TeacherLogin,
    },
    TeacherSide: {
      screen: TeachMainNav,
    },
  },
  { headerMode: 'none' }
)

const StudentNav = StackNavigator (
  {
    Home: {
      screen: SessionID,
    },
    StudentSide: {
      screen: StudentSide,
    },
  },
  { headerMode: 'none' }
)

export default LoginStack = StackNavigator (
  {
    Home: {
      screen: App,
    },
    Student: {
      screen: StudentNav,
    },
    Teacher: {
      screen: TeacherNav,
    }
  }
)

const styles = StyleSheet.create({
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 26
  },
  buttonText: {
    fontSize: 18
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
