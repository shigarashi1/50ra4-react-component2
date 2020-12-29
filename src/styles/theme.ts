const colorPalette = {
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
};

const fontColor = {
  primary: '#ffffff',
  secondary: '#ffffff',
};
export type FontColor = keyof typeof fontColor;

const buttonColor = {
  primary: colorPalette.primary.main,
  secondary: colorPalette.secondary.main,
};

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
