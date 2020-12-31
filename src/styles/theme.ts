const colorPalette = {
  default: {
    light: '#d3d3d3',
    main: '#a9a9a9',
    dark: '#808080',
  },
  // https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=263238&secondary.color=2E7D32
  primary: {
    light: '#4f5b62',
    main: '#263228',
    dark: '#000a12',
  },
  secondary: {
    light: '#60ac5d',
    main: '#2e7c31',
    dark: '#004f04',
  },
  positive: {
    light: '#60ac5d',
    main: '#2e7c31',
    dark: '#004f04',
  },
  negative: {
    light: '#d3d3d3',
    main: '#a9a9a9',
    dark: '#808080',
  },
  success: {
    light: '#60ac5d',
    main: '#2e7c31',
    dark: '#004f04',
  },
  error: {
    light: '#ffa07a',
    main: '#ff6347',
    dark: '#dc143c',
  },
  warning: {
    light: '#f0e68c',
    main: '#ffd700',
    dark: '#ffa500',
  },
  info: {
    light: '#87cefa',
    main: '#1e90ff',
    dark: '#4682b4',
  },
  purple: {
    light: '#d05ce3',
    main: '#9c27b0',
    dark: '#6a0080',
  },
};

const fontColor = {
  default: '#ffffff',
  primary: '#ffffff',
  secondary: '#ffffff',
  white: '#ffffff',
  black: '#000000',
  gray: '#808080',
  lightGray: '#d3d3d3',
};
export type FontColor = keyof typeof fontColor;

const fontSize = {
  extraSmall: 12,
  small: 14,
  middle: 16,
  large: 18,
  extraLarge: 22,
};
export type FontSize = keyof typeof fontSize;

const buttonColor = {
  default: colorPalette.default.main,
  primary: colorPalette.primary.main,
  secondary: colorPalette.secondary.main,
  positive: colorPalette.positive.main,
  negative: colorPalette.negative.main,
  success: colorPalette.success.main,
  error: colorPalette.error.main,
  warning: colorPalette.warning.main,
  info: colorPalette.info.main,
};
export type ButtonColor = keyof typeof buttonColor;

const padding = {
  small: '4px 8px',
  middle: '6px 12px',
  large: '8px 16px',
};

export const lightTheme = {
  color: {
    palette: colorPalette,
    font: fontColor,
    button: buttonColor,
  },
  size: {
    font: fontSize,
  },
  padding,
};
export type StyledTheme = typeof lightTheme;
export const darkTheme: StyledTheme = {
  ...lightTheme,
};
