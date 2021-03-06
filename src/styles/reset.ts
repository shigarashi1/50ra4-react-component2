import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { StyledTheme } from '../types';

export const GlobalStyle = createGlobalStyle<{ theme: StyledTheme }>`
  ${reset}
  /* other styles */
  * {
    font-size: ${({ theme }) => `${theme.font.size.medium}px`};
    font-family: ${({ theme }) => theme.font.family};
    letter-spacing: ${({ theme }) => theme.font.letterSpacing.default};
  }
  body {
    color: ${({ theme }) => theme.body.color};
    background-color: ${({ theme }) => theme.body.backgroundColor};
  }
`;
