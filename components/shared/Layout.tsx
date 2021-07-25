// vendors
import Head from 'next/head';

// hooks
import { useStickyMenu } from '../../hooks/useStickyMenu';

// components
import { Header } from './Header';
import { Footer } from './Footer';
import { CookiesModal } from '../CookiesModal';

interface Props {
  title: string;
  description?: string;
  hideCookies?: boolean;
  children: any;
}

export function Layout({ title, description, hideCookies, children }: Props) {
  const { handleStickyMenu } = useStickyMenu();

  return (
    <>
      <Head>
        <title>{title} | Growly</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <Header />

      <main onWheel={handleStickyMenu} onTouchMove={handleStickyMenu}>
        {children}
      </main>

      {!hideCookies && <CookiesModal />}
      <Footer />
    </>
  );
}
