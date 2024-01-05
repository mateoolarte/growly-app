import { ReactNode } from "react";

import { DEFAULT_FONT } from "@/constants/assets";
// import { Header } from "@/components/Header";
import "@/styles/base.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={DEFAULT_FONT.className}>
        {/* <Header /> */}

        {children}
      </body>
    </html>
  );
}
