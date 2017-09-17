import React, { Component } from 'react' ;
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native' ;
import { StackNavigator} from 'react-navigation' ;
import NewSession from './NewSession' ;
import ViewSession from './ViewSession' ;

class TeacherSide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Session', {sessionID: this.props.navigation.state.params.sessionID })}>
            <Text>
              Make New Session
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('View')}>
            <Text>
              View Sessions
            </Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.circle }>
          <Text style= { styles.displayText }>
            9
          </Text>
        </View>
      </View>
    );
  }
}

const NewSessionNav = StackNavigator (
  {
    Home: {
      screen: NewSession,
    },
  },
  { headerMode: 'none' }
)

const ViewSessionNav = StackNavigator (
  {
    Home: {
      screen: ViewSession,
    },
  },
  { headerMode: 'none' }
)

export default TeachMainNav = StackNavigator (
  {
    Home: {
      screen: TeacherSide,
    },
    Session: {
      screen: NewSessionNav,
    },
    View: {
      screen: ViewSessionNav,
    },
  },
  { headerMode: 'none' }
)


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
