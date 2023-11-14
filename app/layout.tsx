import { ReactNode } from "react";

import { DEFAULT_FONT } from "@/_shared/constants";
import { Header } from "@/_shared/components/Header";
import "@/_shared/styles/base.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={DEFAULT_FONT.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
