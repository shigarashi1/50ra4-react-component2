const colorPalette = {
  default: {
    main: '#a9a9a9',
    light: '#d3d3d3',
    dark: '#808080',
  },
  // https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=263238&secondary.color=2E7D32
  primary: {
    main: '#263228',
    light: '#4f5b62',
    dark: '#000a12',
  },
  secondary: {
    main: '#2e7c31',
    light: '#60ac5d',
    dark: '#004f04',
  },
  positive: {
    main: '#3cb371',
    light: '#8fbc8f',
    dark: '#228b22',
  },
  negative: {
    main: '#778899',
    light: '#b0c4de',
    dark: '#708090',
  },
  success: {
    main: '#3cb371',
    light: '#8fbc8f',
    dark: '#228b22',
  },
  error: {
    main: '#ff4500',
    light: '#ff7f50',
    dark: '#dc143c',
  },
  warning: {
    main: '#ffa500',
    light: '#ffd700',
    dark: '#ff8c00',
  },
  info: {
    main: '#1e90ff',
    light: '#87cefa',
    dark: '#4682b4',
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
