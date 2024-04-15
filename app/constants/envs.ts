export const IS_DEV_ENV = process.env.NODE_ENV === "development";
export const IS_PROD_ENV = process.env.NODE_ENV === "production";
export const IS_BROWSER_ENV = typeof window !== "undefined";

export const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;
export const CMS_TOKEN_ACCESS = process.env.NEXT_PUBLIC_CMS_TOKEN_ACCESS;

export const MERCADO_PAGO_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY;
export const MERCADO_PAGO_ACCESS_KEY = process.env.MERCADOPAGO_ACCESS_KEY;

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY as string;
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;
export const BASE_URL = process.env.BASE_URL;
