import { lightTheme } from '../styles/theme';

export type StyledTheme = typeof lightTheme;

type Size = 'small' | 'medium' | 'large';
type Variant = 'contained' | 'outlined' | 'text';
type PaletteColor = keyof typeof lightTheme.palette;

export type FontColor = keyof typeof lightTheme.font.color;
export type FontSize = keyof typeof lightTheme.font.size;

export type ButtonColor = PaletteColor;
export type ButtonSize = Size;
export type ButtonVariant = Variant;

export type ChipColor = PaletteColor;
export type ChipSize = Size;
export type ChipVariant = 'default' | 'outlined';

export type CheckboxColor = PaletteColor;
export type CheckboxSize = Size;

export type IconColor = PaletteColor;
export type IconSize = keyof typeof lightTheme.iconSize;
