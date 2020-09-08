import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#D94141",
    secondary: "#F26A4B",
    terciary: "#8C493A",
    white: "#fff",
    black: "#262526",
    gray: "#F2F2F2",
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
