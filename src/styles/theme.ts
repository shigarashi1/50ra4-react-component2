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

const spaceUnit = 4;

const bodyTheme = {
  backgroundColor: colorPalette.white.main,
  color: background2fontColors['white'],
};

const fontSize = {
  extraSmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  extraLarge: 22,
};

const fontFamilies = ['Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Helvetica Neue', 'Arial', 'Meiryo', 'sans-serif'];
const fontFamily = fontFamilies.join(',');
const fontWeight = {
  bold: 700,
  normal: 400,
};
const fontLetterSpacing = {
  default: '0.05em',
  narrower: '0.03em',
  wider: '0.1em',
};
const ellipsis = (width: string | number = '100%') => css`
  display: inline-block;
  max-width: ${width};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
`;

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
  small: `${spaceUnit * 2}px ${spaceUnit * 3}px`,
  medium: `${spaceUnit * 3}px ${spaceUnit * 6}px`,
  large: `${spaceUnit * 4}px ${spaceUnit * 9}px`,
};

const focusBoxShadow = (focused: boolean, hasError?: boolean) => css`
  box-shadow: ${(focused || hasError) && `0 0 0 2px ${focused ? colorPalette.green.light : colorPalette.red.light}`};
`;

const fontTheme = {
  color: fontColorPalette,
  family: fontFamily,
  size: fontSize,
  weight: fontWeight,
  letterSpacing: fontLetterSpacing,
  ellipsis,
};

const chipTheme = {
  color: mainColors,
  padding: padding,
};

const buttonTheme = {
  color: mainColors,
  padding: padding,
};

const iconTheme = {
  color: iconColors,
  size: iconSize,
};

const inputTheme = {
  color: lightColors,
  backGroundColor: colorPalette.white.light,
  borderColor: colorPalette.white.dark,
  focusBoxShadow,
};

export const lightTheme = {
  palette: colorPalette,
  body: bodyTheme,
  font: fontTheme,
  chip: chipTheme,
  button: buttonTheme,
  icon: iconTheme,
  input: inputTheme,
};

export const darkTheme: typeof lightTheme = {
  ...lightTheme,
};
