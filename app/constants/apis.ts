import { CMS_URL } from "./envs";

export const LANDING_API = `${CMS_URL}/api/growly-landing?populate[sections][populate]=*`;
export const PLAN_API = (planSlug) => `${CMS_URL}/api/growly-landing?populate[sections][filters][name][$contains]=pricing&populate[sections][populate][plans][filters][slug][$eq]=${planSlug}`
export const BENEFITS_API = `${CMS_URL}/api/pricing-benefit?populate[items][populate]=*`;
export const HEADER_API = `${CMS_URL}/api/growly-header?populate[links][populate]=*`;
export const CURRENCY_CONVERT_API = "https://open.er-api.com/v6/latest/USD";
