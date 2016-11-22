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
export default class MidCirc extends Component {
  render() {
    return (
          <Svg
              width="259.52"
              height="260.03"
          >
            <Path fill="#fff"
                  fillOpacity="0.3"
                  d="M221,191.62A110.21,110.21,0,1,0,67.9,221.23,110.33,110.33,0,0,0,221,191.62Z"/>
          </Svg>
    );
  }
}
//svg-end
