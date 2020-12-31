import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { ThemeProvider } from '../../../providers';

test('renders learn react link', () => {
  render(
    <ThemeProvider>
      <Button label="learn react" />
    </ThemeProvider>,
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
