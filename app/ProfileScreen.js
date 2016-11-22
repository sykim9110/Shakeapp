import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}>
        ProfileScreen
      </Text>
      <Text
        onPress={() => {
          firebase.auth().signOut();
          Actions.login();
        }}>
        Logout
      </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default ProfileScreen;
