import { Hind_Madurai } from "next/font/google";

export const LOGO = "/logo.svg";
export const DEFAULT_FONT = Hind_Madurai({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const CMS_API_URL = process.env.CMS_API_URL;
export const CMS_API_TOKEN_ACCESS = process.env.CMS_API_TOKEN_ACCESS;
