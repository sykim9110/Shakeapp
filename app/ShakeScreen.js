import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import ShakeAnimate from './animate/StudySpace';

const ShakeScreen = () => {
  return (
    <View style={styles.container}>
      <ShakeAnimate />
      {/* <Text
        style={styles.welcome}
        onPress={() => {Actions.profile()}}>
        ShakeScreen
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'gold',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default ShakeScreen;
