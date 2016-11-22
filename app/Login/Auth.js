import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.textAuthContainer}>
         <Text style={styles.textAuth} onPress={()=>{Actions.modal()}}>회원가입하기</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textAuthContainer: {
    marginBottom: 15,
  },
  textAuth: {
    textAlign: 'center',
    color: 'white'
  }
})
