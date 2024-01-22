import { ReactNode } from "react";

import { DEFAULT_FONT } from "@/constants/assets";

import "@/styles/base.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={DEFAULT_FONT.className}>{children}</body>
    </html>
  );
}
