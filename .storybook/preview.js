import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/reset';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];