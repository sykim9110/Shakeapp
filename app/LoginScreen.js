import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Loginlogo from './Login/Svg/Loginlogo';
import Login from './Login/Login';
import Auth from './Login/Auth';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Loginlogo />
      </View>
      <View style={styles.login}>
        <Login />
        <Auth />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#96C8FF',
  },
  logo: {
    flex: 3,
    justifyContent: 'center'
  },
  logoText: {
    fontSize: 50,
    color: '#96C8FF'
  },
  login: {
    flex: 3
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default LoginScreen;
