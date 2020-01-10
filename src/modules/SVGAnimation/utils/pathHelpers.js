import {shapesSVG} from '../constants';

const getSquare = (start, line, borderRadius) =>
  `M${start},${start} h${line} a${borderRadius},${borderRadius} 0 0 1 ${borderRadius},${borderRadius} v${line} a${borderRadius},${borderRadius} 0 0 1 -${borderRadius},${borderRadius} h${-line} a${borderRadius},${borderRadius} 0 0 1 -${borderRadius},-${borderRadius} v${-line} a${borderRadius},${borderRadius} 0 0 1 ${borderRadius},-${borderRadius} z`;

const getRound = radius =>
  `M (500 - ${radius}), 500 a ${radius},${radius} 0 1,0 (${radius} * 2),0 a ${radius},${radius} 0 1,0 -(${radius} * 2),0`;

const generateShapeSVG = {
  [shapesSVG.round]: getRound,
  [shapesSVG.square]: getSquare,
};

export const getShapeSVG = type => generateShapeSVG[type];
