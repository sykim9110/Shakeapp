import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import {
  StyleSheet,
  Text
} from 'react-native';

import LoginScreen from './LoginScreen';
import AuthScreen from './AuthScreen';
import PasswordResetScreen from './PasswordResetScreen';

import FirstScreen from './FirstScreen';
import ShakeScreen from './ShakeScreen';

import ProfileScreen from './ProfileScreen';


const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
  );
};


const App = () => {
  return (
    <Router>
      <Scene key="root">

        <Scene
          key="login"
          component={LoginScreen}
          hideNavBar
          hideTabBar
          initial
        />

        <Scene
          key="auth"
          component={AuthScreen}
          title="AuthScreen"
          direction="vertical"
          hideNavBar
        />

        <Scene
          key="password"
          component={PasswordResetScreen}
          title="PasswordResetScreen"
          direction="vertical"
          hideNavBar
        />

        <Scene
          key="tabbar"
          tabs
          tabBarStyle={{}}
        >

              <Scene
                key="login"
                component={LoginScreen}
                hideNavBar
                hideTabBar
                initial
              />

              <Scene
                key="first"
                component={FirstScreen}
                title="First"
                hideNavBar
              />


            <Scene key="am" title="MAIN" icon={TabIcon}>
              <Scene
                key="shake"
                component={ShakeScreen}
                title="Shake"
                hideNavBar
              />
              <Scene
                key="profile"
                component={ProfileScreen}
                title="Profile"
              />
            </Scene>

            <Scene key="um" title="SHAKE" icon={TabIcon}>
              <Scene
                key="shake"
                component={ShakeScreen}
                title="Shake"
                hideNavBar
              />
            </Scene>

            <Scene key="vu" title="PROFILE" icon={TabIcon}>
              <Scene
                key="shake"
                component={ShakeScreen}
                title="Shake"
                hideNavBar
              />
              <Scene
                key="profile"
                component={ProfileScreen}
                title="Profile"
              />
            </Scene>

        </Scene>

      </Scene>
    </Router>
  );
}

export default App;
