import React, { Component } from 'react';

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';



//svg-start
export default class PathLine extends Component {
  render() {
    return (
      <Svg
          width="259.52"
          height="260.03"
      >
        <Defs>
          <LinearGradient id="grad7" x1="-7.02" y1="84.13" x2="118.48" y2="278.63">
            <Stop offset="0" stopColor="#fff"/>
            <Stop offset="0.23" stopColor="#fff" stopOpacity="0.7"/>
            <Stop offset="0.54" stopColor="#fff" stopOpacity="0.33"/>
            <Stop offset="0.75" stopColor="#fff" stopOpacity="0.09"/>
            <Stop offset="0.85" stopColor="#fff" stopOpacity="0"/>
          </LinearGradient>
        </Defs>
          <G>
            <Path fill="url(#grad7)"
                  fillOpacity="0.5"
                  d="M129.39,222.36,129.1,260C36.24,259.55-25.65,164.54,10.86,79.28L45.41,94C19.5,154.56,63.45,222,129.39,222.36Z"/>
            <Line fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="45.03" y1="93.7" x2="10.46" y2="78.97"/>
          </G>
        </Svg>
    );
  }
}
//svg-end
