// vendors
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

// theme
import { theme } from './theme';

function AllTheProviders({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

function customRender(ui, options) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

export * from '@testing-library/react';
export { customRender as render };
