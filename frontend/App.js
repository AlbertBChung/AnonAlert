import React, { Component } from 'react' ;
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native' ;
import { StackNavigator} from 'react-navigation' ;
import SessionID from './src/components/SessionID' ;
import StudentSide from './src/components/StudentSide' ;
import TeacherLogin from './src/components/TeacherLogin' ;
import TeacherSide from './src/components/TeacherSide' ;

import { Card, ListItem, Button, Header } from 'react-native-elements'


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.heading}>AnonAlert</Text>
        </View>

        <View style={{flex: 1}}>
          <Card style={styles.card}>
            <Button
              large={true}
              buttonStyle={styles.button}
              backgroundColor={'transparent'}
              onPress={() => this.props.navigation.navigate('Student')}
              color={'#1BA39C'}
              title="Student" />
            <Button
              large={true}
              buttonStyle={styles.button}
              backgroundColor={'#1BA39C'}
              onPress={() => this.props.navigation.navigate('Teacher')}
              title="Teacher" />
          </Card>
        </View>
      </ScrollView>
    );
  }
}


const TeacherNav = StackNavigator (
  {
    Home: {
      screen: TeacherLogin,
    },
    TeacherSide: {
      screen: TeacherSide,
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
  heading: {
   color: 'white',
   padding: 40,
   marginTop: 10,
   fontSize: 22,
 },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B8389',
  },
  button: {
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#1BA39C',
    marginTop: 15,
  },
  card: {
    marginTop: 30,
  }
});
