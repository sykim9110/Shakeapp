import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import {
  StyleSheet,
  Text
} from 'react-native';

import LoginScreen from './LoginScreen';
import AuthScreen from './AuthScreen';

import FirstScreen from './FirstScreen';
import GrayScreen from './GrayScreen';

import GoldScreen from './GoldScreen';


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
                key="auth"
                component={AuthScreen}
                title="AuthScreen"
                direction="vertical"
                hideNavBar
              />

              <Scene
                key="first"
                component={FirstScreen}
                title="First"
                hideNavBar
              />


            <Scene key="am" title="AM" icon={TabIcon}>
              <Scene
                key="gold"
                component={GoldScreen}
                title="Gold"
                hideNavBar
              />
              <Scene
                key="gray"
                component={GrayScreen}
                title="Gray"
              />
            </Scene>

            <Scene key="um" title="SHAKE" icon={TabIcon}>
              <Scene
                key="gold"
                component={GoldScreen}
                title="Gold"
                hideNavBar
              />
              <Scene
                key="gray"
                component={GrayScreen}
                title="Gray"
              />
            </Scene>

            <Scene key="vu" title="VU" icon={TabIcon}>
              <Scene
                key="gold"
                component={GoldScreen}
                title="Gold"
                hideNavBar
              />
              <Scene
                key="gray"
                component={GrayScreen}
                title="Gray"
              />
            </Scene>

        </Scene>

      </Scene>
    </Router>
  );
}

export default App;
