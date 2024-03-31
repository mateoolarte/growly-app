import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";

import { DEFAULT_FONT } from "@/constants/assets";

import { GoogleAnalytics } from "./components/GoogleAnalytics";

import "@/styles/base.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="es">
        <body className={DEFAULT_FONT.className}>
          <GoogleAnalytics />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
