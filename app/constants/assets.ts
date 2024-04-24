import { Hind_Madurai } from "next/font/google";

export const LOGO = "/logo.svg";
export const LOGO_DARK = "/logo-dark.svg";
export const ISOTYPE = "/isotype.svg";

export const DEFAULT_FONT = Hind_Madurai({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  fallback: ["system-ui", "arial"],
  variable: "--font-hind-madurai",
});
