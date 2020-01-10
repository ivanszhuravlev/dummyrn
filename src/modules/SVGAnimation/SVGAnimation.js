import React, {useRef, useEffect, useState} from 'react';
import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {svgPathProperties} from 'svg-path-properties';
import {getShapeSVG} from './utils/pathHelpers';
import {shapesSVG} from './constants';

const start = 0;
const line = 150;
const radius = 10;

export const SVGAnimation = ({isRound}) => {
  const path = getShapeSVG(shapesSVG.square)(start, line, radius);
  const pathProps = new svgPathProperties(path);
  const length = pathProps.getTotalLength();

  const [array, setArray] = useState([length, length]);
  const [offset, setOffset] = useState(length);

  const onPress = () => {
    setOffset(offset - 10);
  };

  console.log('rerender');

  return (
    <TouchableOpacity
      onPressIn={onPress}
      activeOpacity={0.9}
      style={[
        StyleSheet.absoluteFill,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Svg height="50%" width="50%" viewBox="0 0 200 200">
        <Path
          d={path}
          fill="#ffffff"
          x="30"
          stroke="#a0a0a0"
          strokeWidth="6"
          strokeDasharray={array}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};
