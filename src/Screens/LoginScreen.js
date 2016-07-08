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


export default class LoginScreen extends Component{

  constructor(props){
    super(props)
    this._login = this._login.bind(this)
    this.renderScene = this.renderScene.bind(this)

  }

  _login(){
    this.props.navigator.push({
      id: 'main'
    })
  }

  renderScene(route, navigator){
    return (
     <View style={styles.container}>
        <TouchableHighlight onPress={this._login}>
          <Text style={styles.button}>Login</Text>
        </TouchableHighlight>
      </View>
      );
  }

  render() {
    return (
      <Navigator
          renderScene={this.renderScene}
          navigationBar={
            <Navigator.NavigationBar style={styles.navbar}
                routeMapper={NavigationBarRouteMapper} />
          }
      />
    );
  }
}


const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={styles.navbutton}>
        <Text style={styles.navtitle}>
          Login
        </Text>
      </TouchableOpacity>
    );
  }
};
