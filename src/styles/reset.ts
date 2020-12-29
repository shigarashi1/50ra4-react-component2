import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { StyledTheme } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: StyledTheme }>`
  ${reset}
  /* other styles */
`;
