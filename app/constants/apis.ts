import { CMS_URL } from "./envs";

export const LANDING_API = `${CMS_URL}/api/growly-landing?populate[sections][populate]=*`;
export const PLAN_API = (planSlug) => `${CMS_URL}/api/growly-landing?populate[sections][filters][name][$contains]=pricing&populate[sections][populate][plans][filters][slug][$eq]=${planSlug}`;
export const PLAN_BENEFITS_API = (planSlug) => `${CMS_URL}/api/pricing-benefit?populate[items][filters][belongPlans][${planSlug}][$eq]=true`;
export const BENEFITS_API = `${CMS_URL}/api/pricing-benefit?populate[items][populate]=*`;
export const CURRENCY_CONVERT_API = "https://open.er-api.com/v6/latest/USD";

export const navigationApi = (location) =>
  `${CMS_URL}/api/growly-navigation?populate[${location}][populate]=*`;
