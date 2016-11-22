import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.textPasswordContainer}>
         <Text
            style={styles.textPassword}
            onPress={()=>{Actions.password()}}>
            앗! 비밀번호를 까먹으셨나요?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textPasswordContainer: {
    marginBottom: 15,
  },
  textPassword: {
    textAlign: 'center',
    fontSize: 10,
    color: 'white'
  }
})
