// vendors
import Head from "next/head";
import styled from "styled-components";

// components
import Header from "./Header";

const Container = styled.main``;

export default function Layout({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container></Container>
    </>
  );
}
