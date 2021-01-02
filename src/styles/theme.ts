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

const fontSize = {
  extraSmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  extraLarge: 22,
};

const fontFamily = '"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif';

const fontWeight = {
  bold: 700,
  normal: 400,
};
const fontLetterSpacing = {
  default: '0.05em',
  narrower: '0.03em',
  wider: '0.1em',
};

const iconSize = {
  small: 18,
  medium: 24,
  large: 36,
};

const borderColor = {
  default: colorPalette.default.dark,
  primary: colorPalette.primary.dark,
  secondary: colorPalette.secondary.dark,
  positive: colorPalette.positive.dark,
  negative: colorPalette.negative.dark,
  success: colorPalette.success.dark,
  error: colorPalette.error.dark,
  warning: colorPalette.warning.dark,
  info: colorPalette.info.dark,
  purple: colorPalette.purple.dark,
};

const padding = {
  small: '8px 16px',
  medium: '12px 24px',
  large: '15px 32px',
};

export const lightTheme = {
  color: {
    palette: colorPalette,
    border: borderColor,
  },
  font: {
    color: fontColor,
    family: fontFamily,
    size: fontSize,
    weight: fontWeight,
    letterSpacing: fontLetterSpacing,
  },
  icon: {
    size: iconSize,
  },
  padding,
};

export const darkTheme: typeof lightTheme = {
  ...lightTheme,
};
