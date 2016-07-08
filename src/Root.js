/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginScreen from './Screens/LoginScreen'
import MainScreen from './Screens/MainScreen'

export default class starter extends Component {
  constructor(props){
    super(props)
    this.renderScene =this.renderScene.bind(this)
  }
  render() {
    return (
      <Navigator
          initialRoute={{id: 'login'}}
          renderScene={this.renderScene}
      />
    )
  }

  renderScene(route, navigator){
    console.log("Render screen")

    switch (route.id){
      case 'login':
        return <LoginScreen navigator={navigator} />
      case 'main':
        return <MainScreen navigator={navigator} />
    }
  }
}
