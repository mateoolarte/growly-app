import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

const gaTrackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;
const ENV = process.env.NODE_ENV;

export function useTrackingPage() {
  const router = useRouter();

  useEffect(() => {
    if (ENV !== 'development') {
      ReactGA.initialize(gaTrackingId);

      router.events.on('routeChangeComplete', handleRouteChangeComplete);

      function handleRouteChangeComplete(url) {
        ReactGA.pageview(url);
      }
    }
  }, [router]);
}
