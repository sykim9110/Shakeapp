import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import {
  StyleSheet,
  Text
} from 'react-native';

import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';

import LoginScreen from './LoginScreen';
import GoldScreen from './GoldScreen';

import ModalScreen from './ModalScreen';

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
          initial
        />

        <Scene
          key="tabbar"
          tabs
          tabBarStyle={{ backgroundColor: '#ffffff' }}
        >

          <Scene key="osu" title="OSU" icon={TabIcon}>
            <Scene
              key="scarlet"
              component={ScarletScreen}
              title="Scarlet"
            />
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
            />
          </Scene>

          <Scene key="um" title="UM" icon={TabIcon}>
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
              initial
            />
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
            />
          </Scene>

        </Scene>


        <Scene
          key="modal"
          component={ModalScreen}
          title="ModalScreen"
          direction="vertical"
          hideNavBar
        />
      </Scene>
    </Router>
  );
}

export default App;
