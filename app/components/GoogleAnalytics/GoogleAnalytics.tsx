import Script from "next/script";

import { GA_ID, IS_PROD_ENV } from "@/constants/envs";

export function GoogleAnalytics() {
  if (!IS_PROD_ENV) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />

      <Script id="load-ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
