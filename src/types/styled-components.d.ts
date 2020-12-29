import 'styled-components';
import { StyledTheme } from '../styles/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends StyledTheme {}
}
