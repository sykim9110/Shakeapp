import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      verifyEmail: false,
      passwordError: false,
      _errorMessage: '',
      AuthError: false
    };
    this.sendPasswordReset = this.sendPasswordReset.bind(this);

  }
  sendPasswordReset() {
      this.setState({passwordError: false, AuthError: false})
      var email = this.state.email;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(() => {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        this.setState({AuthError: true, _errorMessage: '해당 이메일로 비밀번호 초기화 메일을 발송하였습니다.'}); //Password Reset Email Sent!
        // [END_EXCLUDE]
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
            this.setState({passwordError: true, _errorMessage: '이메일을 정확히 입력하세요.'});
        } else if (errorCode == 'auth/user-not-found') {
            this.setState({passwordError: true, _errorMessage: 'SHAKE에 등록되지 않은 아이디입니다.'})
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
  }
  render() {
    return (
      <View style={styles.authContainer}>

        <View style={styles.errorCode}>
          {this.state.passwordError && <Text style={{color: 'red', fontSize: 10}}>{this.state._errorMessage}</Text>}
          {this.state.AuthError && <Text style={{color: 'green', fontSize: 10}}>{this.state._errorMessage}</Text>}
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="#FFFFFF"
            underlineColorAndroid="#FFFFFF"
            selectionColor="#FFFFFF"
            keyboardType="email-address"
            placeholder="아이디를 적어주세요"
            maxLength = {30}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.text}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={this.sendPasswordReset}
            title='비밀번호 초기화'
            color='#6090FF'
            accessibilityLabel="회원가입"
          />
        </View>
      </View>
    );
  }
}

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 5}}>
        <AuthPage />
      </View>
      <View style={{flex: 2}}>
        <Text
          style={styles.welcome}
          onPress={() => {Actions.pop()}}>
          로그인
        </Text>
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
  authContainer:{
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorCode: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  textInputContainer: {
    flex: 2,
    justifyContent: 'flex-start'
  },
  textInput: {
    width: 200,
    color: '#FFFFFF'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    width: 150,
  },
  button: {
    width: 150,
  }
});

export default AuthScreen;
