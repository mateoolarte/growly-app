import { Hind_Madurai } from "next/font/google";

export const LOGO = "/logo.svg";
export const DEFAULT_FONT = Hind_Madurai({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const IS_DEV_ENV = process.env.NODE_ENV === "development";
export const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;
export const CMS_TOKEN_ACCESS = process.env.NEXT_PUBLIC_CMS_TOKEN_ACCESS;
