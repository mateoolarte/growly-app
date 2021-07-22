// vendors
import Head from 'next/head';
import styled from 'styled-components';

// hooks
import { useStickyMenu } from '../../hooks/useStickyMenu';

// components
import { Header } from './Header';
import { Footer } from './Footer';
import { CookiesModal } from '../CookiesModal';

const Container = styled.main``;

export function Layout({ title, description, hideCookies, children }) {
  const { handleStickyMenu } = useStickyMenu();

  return (
    <>
      <Head>
        <title>{title} | Growly</title>
        <meta name="description" content={description} />
      </Head>

      <Header />

      <Container onWheel={handleStickyMenu} onTouchMove={handleStickyMenu}>
        {children}
      </Container>

      {!hideCookies && <CookiesModal />}
      <Footer />
    </>
  );
}
