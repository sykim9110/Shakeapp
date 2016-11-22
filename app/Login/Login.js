import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';

import firebase from 'firebase';
const app = firebase.initializeApp({
    apiKey: "AIzaSyBAP6CGUxpBlN9N6G0_bW_pNRg91idBdhQ",
    authDomain: "shake-d5274.firebaseapp.com",
    databaseURL: "https://shake-d5274.firebaseio.com",
    storageBucket: "shake-d5274.appspot.com",
    messagingSenderId: "181749609109"
});

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          Signin: false,
          email: '',
          password: '',
          verifyEmail: false,
          signinStatus: '로그인',
          noServer: 'false'
        }
        //이메일 auth
        this.toggleSignIn = this.toggleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.sendEmailVerification = this.sendEmailVerification.bind(this);
        this.sendPasswordReset = this.sendPasswordReset.bind(this);


    }

    // *Handles the sign in button press.
    toggleSignIn() {
        if (firebase.auth().currentUser) {
          // [START signout]
          firebase.auth().signOut();
          // [END signout]
        } else {
          var email = this.state.email;
          var password = this.state.password;
          if (email.length < 4) {
            alert('이메일을 입력하세요')
            return;
          }
          if (password.length < 4) {
            alert('비밀번호를 입력하세요')
            return;
          }
          // Sign in with email and pass.
          // [START authwithemail]
          firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
              alert('비밀번호가 일치하지 않습니다');
            } else {
              alert(errorMessage);
            }
            console.log(error);
            this.setState({Signin: false});
            // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
      this.setState({Signin: true});
    }

    // *Handles the Sign up button press.
    handleSignUp() {
        var email = this.state.email;
        var password = this.state.password;
        if(email.length < 4) {
          alert('이메일을 입력하세요')
          return;
        }
        if (password.length < 4) {
          alert('비밀번호를 입력하세요')
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
            alert('비밀번호를 더 어렵게 설정하세요');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });
        // [END createwithemail]
    }

    // *Sends an email verification to the user.
    sendEmailVerification() {
        // [START sendemailverification]
        firebase.auth().currentUser.sendEmailVerification().then(() => {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('이메일로 확인 메일을 보냈습니다.'); //Email Verification Sent!
        // [END_EXCLUDE]
        });
        // [END sendemailverification]
    }

    sendPasswordReset() {
        var email = this.state.email;
        // [START sendpasswordemail]
        firebase.auth().sendPasswordResetEmail(email).then(() => {
          // Password Reset Email Sent!
          // [START_EXCLUDE]
          alert('이메일로 메일을 보냈습니다.'); //Password Reset Email Sent!
          // [END_EXCLUDE]
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
          } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });
        // [END sendpasswordemail];
    }

    /**
     * Handle the sign out button press.
     */
    handleSignOut() {
      var googleAuth = gapi.auth2.getAuthInstance();
      googleAuth.signOut().then(() => {
        firebase.auth().signOut();
      });
    }

    /**
     *  handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    componentDidMount() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged((user) => {
        // [START_EXCLUDE silent]
        this.setState({verifyEmail: false});
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // [START_EXCLUDE silent]
          this.setState({signinStatus: '로그아웃'});
          if (!emailVerified) {
            this.setState({verifyEmail: true});
          }
          // [END_EXCLUDE]
        } else {
          // User is signed out.
          // [START_EXCLUDE silent]
          this.setState({signinStatus: '로그인'});
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        // **document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
      this.setState({noServer: 'good'})
      // document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
      // document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
      // document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
      // document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
    }

    render() {
      let verifyEmail = (
        <Button
          onPress={this.sendEmailVerification}
          title="이메일 증명"
          color='#96C8FF'
          accessibilityLabel="이메일 증명 버튼"
        />
      );

      return (
        <View style={styles.container}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="#FFFFFF"
              underlineColorAndroid="#FFFFFF"
              selectionColor="#FFFFFF"
              keyboardType="email-address"
              placeholder="email"
              maxLength = {20}
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.text}/>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="#FFFFFF"
              underlineColorAndroid="#FFFFFF"
              selectionColor="#FFFFFF"
              placeholder="password"
              maxLength = {20}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.text}/>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonLogin}>
              <Button
                style={styles.button}
                onPress={this.toggleSignIn}
                title={this.state.signinStatus}
                color='#6090FF'
                accessibilityLabel="로그인"
              />
            </View>
            {/* <Button
              onPress={this.handleSignUp}
              title='회원가입'
              color='#96C8FF'
              accessibilityLabel="회원가입"
            /> */}
            {this.state.verifyEmail ? verifyEmail : null}
            {/* <Button
              onPress={this.sendPasswordReset}
              title='비밀번호 초기화'
              color='#96C8FF'
              accessibilityLabel="이메일로 비밀번호 초기화"
            /> */}
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
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
  },
  buttonLogin: {
    width: 150
  },
  textAuth: {
    fontSize: 12,
    color: '#FFFFFF'
  }
});
