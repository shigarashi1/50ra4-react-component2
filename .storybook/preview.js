import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];