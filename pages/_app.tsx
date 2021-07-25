// vendors
import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// theme
import { theme } from '../utils/theme';

// hooks
import { useTrackingPage } from '../hooks/useTrackingPage';
import { useSupportChat } from '../hooks/useSupportChat';

// components
import { Scripts } from '../components/shared/Scripts';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: content-box;
  }

  body {
    margin: 0;
    color: ${(props) => props && props.theme.colors.black};
    font-size: 16px;
    font-family: ${(props) => props && props.theme.fonts.primary};
  }
`;

export default function Growly({ Component, pageProps }: AppProps) {
  useTrackingPage();
  useSupportChat(Component);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
      <Scripts />
    </ThemeProvider>
  );
}
