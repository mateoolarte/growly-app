import { CMS_URL } from "./envs";

export const LANDING_API = `${CMS_URL}/api/growly-landing?populate[sections][populate]=*`;
export const BENEFITS_API = `${CMS_URL}/api/pricing-benefit?populate[items][populate]=*`;
export const CURRENCY_CONVERT_API = "https://open.er-api.com/v6/latest/USD";
