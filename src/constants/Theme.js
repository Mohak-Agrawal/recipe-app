import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: 'green',
  secondary: '#F12D4D',
  warning: '#EA5454',
  gray: '#6A6A6A',
  lightGray: '#EFEFEF',
  black: '#000000',
  white: '#FFFFFF',
};

export const SIZES = {
  // global sizes
  margin: 10,
  iconSize: 24,
  radius: 5,
  padding: 15,
  opacity: 0.7,

  // font sizes
  h1: 30,
  h2: 24,
  h3: 18,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 24,
  body3: 18,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  h1: {fontWeight: '700', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontWeight: '700', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontWeight: '700', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontWeight: '700', fontSize: SIZES.h4, lineHeight: 18},
  h5: {fontWeight: '700', fontSize: SIZES.h5, lineHeight: 16},
  body1: {
    fontWeight: '400',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontWeight: '400',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontWeight: '400',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontWeight: '400',
    fontSize: SIZES.body4,
    lineHeight: 18,
  },
  body5: {
    fontWeight: '400',
    fontSize: SIZES.body5,
    lineHeight: 16,
  },
};

const Theme = {COLORS, SIZES, FONTS};

export default Theme;
