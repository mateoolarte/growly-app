import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";

import { DEFAULT_FONT } from "@/constants/assets";
import { translations } from "@/constants/translations";

import { CSPostHogProvider } from "./providers";

import { GoogleAnalytics } from "./components/GoogleAnalytics";

import "@/styles/base.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider localization={translations}>
      <html lang="es" className={DEFAULT_FONT.className}>
        <CSPostHogProvider>
          <body>
            <GoogleAnalytics />
            {children}
          </body>
        </CSPostHogProvider>
      </html>
    </ClerkProvider>
  );
}
