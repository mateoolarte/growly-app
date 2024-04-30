import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";

import { DEFAULT_FONT } from "@/constants/assets";
import { translations } from "@/constants/translations";

import { GoogleAnalytics } from "./components/GoogleAnalytics";

import "@/styles/base.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={DEFAULT_FONT.className}>
      <ClerkProvider localization={translations}>
        <body>
          {children}
          <GoogleAnalytics />
        </body>
      </ClerkProvider>
    </html>
  );
}
