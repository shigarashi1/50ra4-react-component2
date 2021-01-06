/**
 * @see https://material.io/resources/color/#!/?view.left=0&view.right=0
 */
export const colorPalette = {
  black: {
    light: '#4e5b50',
    main: '#263228',
    dark: '#000b00',
  },
  white: {
    light: '#ffffff',
    main: '#fafafa',
    dark: '#c7c7c7',
  },
  gray: {
    light: '#828d86',
    main: '#556059',
    dark: '#2c3630',
  },
  darkGray: {
    light: '#62727b',
    main: '#37474f',
    dark: '#102027',
  },
  brown: {
    light: '#7b7266',
    main: '#4f473c',
    dark: '#262016',
  },
  blue: {
    light: '#5472d3',
    main: '#0d47a1',
    dark: '#002171',
  },
  purple: {
    light: '#9c4dcc',
    main: '#6a1b9a',
    dark: '#38006b',
  },
  orange: {
    light: '#ff7d47',
    main: '#e64a19',
    dark: '#ac0800',
  },
  red: {
    light: '#ff5f52',
    main: '#c62828',
    dark: '#8e0000',
  },
  pink: {
    light: '#ff5c8d',
    main: '#d81b60',
    dark: '#a00037',
  },
  green: {
    light: '#60ac5d',
    main: '#2e7c31',
    dark: '#004f04',
  },
  yellow: {
    light: '#ffff6b',
    main: '#fdd835',
    dark: '#c6a700',
  },
};

export const fontColorPalette = {
  white: '#fafafa',
  black: '#212121',
  darkGray: '#545454',
  gray: '#808080',
  lightGray: '#afafaf',
};

type Color = keyof typeof colorPalette;
type ColorTone = keyof typeof colorPalette[Color];
type FontColorDef = Record<ColorTone, 'white' | 'black'>;

const color2fontColorDef: Record<Color, FontColorDef> = {
  black: { light: 'white', main: 'white', dark: 'white' },
  white: { light: 'black', main: 'black', dark: 'black' },
  gray: { light: 'black', main: 'white', dark: 'white' },
  darkGray: { light: 'white', main: 'white', dark: 'white' },
  brown: { light: 'white', main: 'white', dark: 'white' },
  blue: { light: 'black', main: 'white', dark: 'white' },
  orange: { light: 'black', main: 'black', dark: 'white' },
  red: { light: 'black', main: 'white', dark: 'white' },
  pink: { light: 'black', main: 'white', dark: 'white' },
  purple: { light: 'white', main: 'white', dark: 'white' },
  green: { light: 'black', main: 'white', dark: 'white' },
  yellow: { light: 'black', main: 'black', dark: 'black' },
};

const pairs = Object.entries(color2fontColorDef) as [Color, FontColorDef][];

const fontColorDef2fontColor = (def: FontColorDef): Record<ColorTone, string> => ({
  light: fontColorPalette[def.light],
  main: fontColorPalette[def.main],
  dark: fontColorPalette[def.dark],
});

export const background2fontColors = Object.fromEntries(
  pairs.map(([color, def]) => [color, fontColorDef2fontColor(def)]),
) as Record<Color, Record<ColorTone, string>>;
