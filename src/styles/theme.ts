import { css } from 'styled-components';
import { colorPalette, fontColorPalette, background2fontColors } from './palette';
import { Color, ColorTheme, ColorTone } from '../types';

const colorTheme: Record<ColorTheme, Color> = {
  default: 'darkGray',
  primary: 'black',
  secondary: 'green',
  positive: 'green',
  negative: 'gray',
  success: 'green',
  error: 'red',
  warning: 'yellow',
  info: 'blue',
  highlight: 'purple',
};

const colorPairs = Object.entries(colorTheme) as [ColorTheme, Color][];
const colorTheme2color = (tone: ColorTone) =>
  // eslint-disable-next-line prettier/prettier
  Object.fromEntries(
    colorPairs.map(([theme, color]) => [theme, colorPalette[color][tone]]),
  ) as Record<ColorTheme, string>;

const lightColors = colorTheme2color('light');
const mainColors = colorTheme2color('main');
// const darkColors = colorTheme2color('dark');

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

const iconColors: Record<ColorTheme, string> = {
  ...lightColors,
  warning: mainColors.warning,
  highlight: mainColors.highlight,
};

const padding = {
  small: '8px 16px',
  medium: '12px 24px',
  large: '15px 32px',
};

const ellipsis = (width: string | number = '100%') => css`
  display: inline-block;
  max-width: ${width};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
`;

const focusBoxShadow = (focused: boolean, hasError?: boolean) => css`
  box-shadow: ${(focused || hasError) && `0 0 0 2px ${focused ? colorPalette.green.light : colorPalette.red.light}`};
`;

export const lightTheme = {
  palette: colorPalette,
  body: {
    backgroundColor: colorPalette.white.main,
    color: background2fontColors['white'],
  },
  font: {
    color: fontColorPalette,
    family: fontFamily,
    size: fontSize,
    weight: fontWeight,
    letterSpacing: fontLetterSpacing,
    ellipsis,
  },
  chip: {
    color: mainColors,
    padding: padding,
  },
  button: {
    color: mainColors,
    padding: padding,
  },
  icon: {
    color: iconColors,
    size: iconSize,
  },
  input: {
    color: lightColors,
    backGroundColor: colorPalette.white.light,
    borderColor: colorPalette.white.dark,
    focusBoxShadow,
  },
};

export const darkTheme: typeof lightTheme = {
  ...lightTheme,
};
