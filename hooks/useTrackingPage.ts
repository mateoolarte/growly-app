import { useEffect } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga";

const ENV = process.env.NODE_ENV;
const ANALYTICS_KEY = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;

export function useTrackingPage() {
  const router = useRouter();

  function handleRouteChangeComplete(url: string) {
    ReactGA.pageview(url);
  }

  useEffect(() => {
    if (ENV !== "development" && ANALYTICS_KEY) {
      ReactGA.initialize(ANALYTICS_KEY);

      router.events.on("routeChangeComplete", handleRouteChangeComplete);
    }
  }, [router]);
}
