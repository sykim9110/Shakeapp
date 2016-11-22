import React, { Component } from 'react';
import {
  Animated,
  Easing,
  Text
} from 'react-native';

export default class SlidingBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        slide: new Animated.ValueXY({ x: 0, y: 0 })
      };

      this.slideIn = Animated.timing(
        this.state.slide,
        {
          toValue: { x: 200, y: 200 },
          duration: 2000,
          delay: 1000,
          easing: Easing.in(Easing.ease)
        }
      );
    }
    render() {
      const slideStyle = this.state.slide.getTranslateTransform();

      return (
        <Animated.View style={slideStyle}>
            <Text>My SlidingBox</Text>
        </Animated.View>
      );
    }
    componentDidMount() {
      this.slideIn.start();
    }
}
