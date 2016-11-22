import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Easing
} from 'react-native';

import IdiotsLogo from './components/IdiotsLogo';
import DraggableView from './components/DraggableView';
import Aosl from './components/Aosl';
import MidCirc from './components/MidCirc';
import OutCirc from './components/OutCirc';
import PathLine from './components/PathLine';

export default class StudySpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      spinAnim: new Animated.Value(0)
    };
  }
  Animate() {
    this.state.fadeAnim.setValue(0);
    this.state.spinAnim.setValue(0);
    Animated.parallel([
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          // delay: 50,
          duration: 2000,
          esing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.spinAnim,
        {
          toValue: 1,
          duration: 2000,
          esing: Easing.linear
        }
      )
    ]).start(()=> {this.AnimateTwo()});
  }
  AnimateTwo() {
    this.state.spinAnim.setValue(0);
    Animated.timing(
      this.state.spinAnim,
      {
        toValue: 1,
        // delay: 50,
        duration: 2000,
        esing: Easing.linear
      }
    ).start();
  }
  render() {

    const rotate = this.state.fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '500deg']
    });
    const scale = this.state.fadeAnim.interpolate({
        inputRange: [0, 0.1, 0.3, 0.6, 0.7, 0.8, 0.9, 1],
        outputRange: [0, 0.2, 0.8, 1, 1, 1, 1, 1]
    });
    const translateY = this.state.fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 0]
    });
    const opacity = this.state.fadeAnim.interpolate({
        inputRange: [0, 0.3, 0.4, 0.7, 1],
        outputRange: [0, 0.5, 1, 1, 1]
    });
    return (
      <View style={{flex: 1, backgroundColor: '#29ABE2'}}>
        <DraggableView style={styles.container}>
          <Animated.View
            style={{
              opacity: this.state.fadeAnim,
              position: 'relative',
              width: 259.52,
              height: 260.03,
            }}>
              <Animated.View
                style={{
                  position: 'absolute',
                  transform: [{
                    scale: this.state.fadeAnim.interpolate({
                        inputRange: [0, 0.2, 0.3, 0.6, 0.7, 0.8, 0.9, 1],
                        outputRange: [0, 0.1, 0.8, 1, 1, 1, 1, 1]
                    })
                  }]
                }}
              >
                <MidCirc />
              </Animated.View>
              <Animated.View
                style={{
                  position: 'absolute',
                  transform: [{
                    scale
                  }]
                }}
              >
                <OutCirc />
              </Animated.View>
              <Animated.View
                style={{
                  position: 'absolute',
                  transform: [{
                    scale: this.state.fadeAnim.interpolate({
                        inputRange: [0, 0.2, 0.5, 0.7, 0.91, 0.92, 0.93, 0.94, 0.95, 0.99, 1],
                        outputRange: [0, 0.1, 0.2, 1, 1, 1, 1, 1, 1, 1, 1]
                    })
                  }]
                }}
              >
                <Aosl />
              </Animated.View>
              <Animated.View
                style={{
                  opacity,
                  position: 'absolute',
                  transform: [{
                    rotate: this.state.spinAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '720deg']
                    })
                  }]
                }}
                >
                  <PathLine />
              </Animated.View>
          </Animated.View>
        </DraggableView>
      </View>
    );
  }
  componentDidMount() {
    this.Animate();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
