const colorPalette = {
  default: {
    main: '#708090',
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
  },
  negative: {
    main: '#708090',
  },
  success: {
    main: '#3cb371',
  },
  error: {
    main: '#dc143c',
  },
  warning: {
    main: '#ffa500',
  },
  info: {
    main: '#1e90ff',
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

export const lightTheme = {
  color: {
    palette: colorPalette,
    font: fontColor,
    button: buttonColor,
  },
};
export type StyledTheme = typeof lightTheme;
export const darkTheme: StyledTheme = {
  ...lightTheme,
};
