// https://material.io/resources/color/#!/?view.left=0&view.right=0
const colorPalette = {
  default: {
    light: '#dbdbdb',
    main: '#a9a9a9',
    dark: '#7a7a7a',
  },
  primary: {
    light: '#4e5b50',
    main: '#263228',
    dark: '#000b00',
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
    light: '#dbdbdb',
    main: '#a9a9a9',
    dark: '#7a7a7a',
  },
  success: {
    light: '#60ac5d',
    main: '#2e7c31',
    dark: '#004f04',
  },
  error: {
    light: '#ff9574',
    main: '#ff6347',
    dark: '#c52e1d',
  },
  warning: {
    light: '#ffff52',
    main: '#ffd700',
    dark: '#c7a600',
  },
  info: {
    light: '#6fc0ff',
    main: '#1e90ff',
    dark: '#0063cb',
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

const fontFamily = '"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif';

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
  purple: colorPalette.purple.main,
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
    button: buttonColor,
  },
  font: {
    color: fontColor,
    family: fontFamily,
    size: fontSize,
  },
  padding,
};
export type StyledTheme = typeof lightTheme;
export const darkTheme: StyledTheme = {
  ...lightTheme,
};
