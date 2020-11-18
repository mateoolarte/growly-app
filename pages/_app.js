import { useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = {
  colors: {
    primary: "#D94141",
    secondary: "#F26A4B",
    terciary: "#8C493A",
    white: "#fff",
    black: "#262526",
    gray: "#F2F2F2",
    grayDark: "#b5b5b5",
  },
  sizes: {
    container: "1160px",
    text: "0.9rem",
    textSmall: "0.8rem",
    space1: "32px",
    space2: "24px",
    space3: "36px",
    space4: "12px",
    space5: "8px",
    space6: "28px",
    space7: "5px;",
    space8: "30px",
    circle: "50%",
  },
  fonts: {
    primary: "'Hind Madurai', sans-serif",
    bold: "600",
  },
};

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-size: 16px;
    font-family: ${(props) => props && props.theme.fonts.primary};
    box-sizing: content-box;
  }
`;

export default function Growly({ Component, pageProps }) {
  useEffect(() => {
    const chat = window.Tawk_API;

    if (chat.minimize) {
      chat.minimize();
    }
  }, [Component]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/5fb47ecc3e20f61525e475ea/default';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();`,
        }}
      />
    </ThemeProvider>
  );
}
