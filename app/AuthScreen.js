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
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  // *Handles the Sign up button press.
  handleSignUp() {
      this.setState({passwordError: false});
      var email = this.state.email;
      var password = this.state.password;
      if(email.length < 4) {
        this.setState({passwordError: true, _errorMessage: '이메일을 입력하세요.'});
        return;
      }
      if (password.length < 4) {
        this.setState({passwordError: true, _errorMessage: '비밀번호를 입력하세요.'});
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          this.setState({passwordError: true, _errorMessage: '비밀번호를 더 어렵게 설정하세요.'});
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
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
            placeholder="email"
            maxLength = {30}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.text}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor="#FFFFFF"
            underlineColorAndroid="#FFFFFF"
            selectionColor="#FFFFFF"
            placeholder="password"
            maxLength = {30}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.text}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={this.handleSignUp}
            title='회원가입'
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
    flex: 1,
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
