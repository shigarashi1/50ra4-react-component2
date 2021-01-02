import React from 'react';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/reset';
import { lightTheme } from '../styles/theme';
import { StyledTheme } from '../types';

type Props = {
  theme?: StyledTheme;
};

export const ThemeProvider: React.FC<Props> = ({ theme = lightTheme, children = null }) => {
  return (
    <StyledComponentThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      {children}
    </StyledComponentThemeProvider>
  );
};
