// vendors
import Head from "next/head";
import styled from "styled-components";

// components
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.main``;

export default function Layout({ title, children }) {
  function handleStickyMenu() {
    const headerElm = document.getElementById("sticky-header");

    if (window.scrollY >= 80) {
      headerElm.classList.add("active");
    } else {
      headerElm.classList.remove("active");
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />

      <Container onWheel={handleStickyMenu} onTouchMove={handleStickyMenu}>
        {children}
      </Container>

      <Footer />
    </>
  );
}
