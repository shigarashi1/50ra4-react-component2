import { colorPalette } from '../styles/palette';
import { lightTheme } from '../styles/theme';

export type StyledTheme = typeof lightTheme;

export type Color = keyof typeof colorPalette;
export type ColorTone = keyof typeof colorPalette[Color];
export type ColorTheme =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'positive'
  | 'negative'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'highlight';

type Size = 'small' | 'medium' | 'large';
type Variant = 'contained' | 'outlined' | 'text';

export type FontColor = keyof typeof lightTheme.font.color;
export type FontSize = keyof typeof lightTheme.font.size;

export type ButtonColor = ColorTheme;
export type ButtonSize = Size;
export type ButtonVariant = Variant;

export type ChipColor = ColorTheme;
export type ChipSize = Size;
export type ChipVariant = 'default' | 'outlined';

export type CheckboxColor = ColorTheme;
export type CheckboxSize = Size;

export type IconColor = ColorTheme;
export type IconSize = keyof typeof lightTheme.icon.size;
