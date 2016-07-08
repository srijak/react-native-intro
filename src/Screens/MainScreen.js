import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Navigator,
} from 'react-native';

import styles from './styles'


export default class MainScreen extends React.Component{

  constructor(props){
    super(props)
    this._logout = this._logout.bind(this)
  }

  _logout(){
    this.props.navigator.pop()
  }

  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={styles.navbar}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }

  renderScene() {
    return (
      <View style={styles.container}>        
        <TouchableHighlight onPress={this._logout}>
          <Text style={styles.button}>Logout</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const NavigationBarRouteMapper = {
  RightButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={styles.navbutton}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={styles.navtitle}>
         Exit
        </Text>
      </TouchableOpacity>
    );
  },
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={styles.navbutton}>
        <Text style={styles.navtitle}>
         Main
        </Text>
      </TouchableOpacity>
    );
  }
};
