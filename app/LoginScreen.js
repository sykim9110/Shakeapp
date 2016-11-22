import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Loginlogo from './Login/Svg/Loginlogo';
import Login from './Login/Login';
import Auth from './Login/Auth';

const LoginScreen = () => {
  return (
    <View style={styles.Scontainer}>
      <View style={styles.Slogo}>
        <Loginlogo />
      </View>
      <View style={styles.Slogin}>
        <Login />
        <Auth />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Scontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#96C8FF',
  },
  Slogo: {
    flex: 3,
    justifyContent: 'center'
  },
  logoText: {
    fontSize: 50,
    color: '#96C8FF'
  },
  Slogin: {
    flex: 3
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#96C8FF'
  },
  textInputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    width: 200,
    color: '#FFFFFF'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 30
  },
  buttonLogin: {
    width: 150
  },
  textAuth: {
    fontSize: 12,
    color: '#FFFFFF'
  }
});

export default LoginScreen;
