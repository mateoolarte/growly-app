import { CMS_URL } from "./envs";

export const LANDING_API = `${CMS_URL}/api/growly-landing?populate[sections][populate]=*`;

export const PLAN_API = (planSlug) =>
  `${CMS_URL}/api/growly-landing?populate[sections][filters][name][$contains]=pricing&populate[sections][populate][plans][filters][slug][$eq]=${planSlug}`;
export const PLAN_BENEFITS_API = (planSlug) =>
  `${CMS_URL}/api/pricing-benefit?populate[items][filters][belongPlans][${planSlug}][$eq]=true`;
export const BENEFITS_API = `${CMS_URL}/api/pricing-benefit?populate[items][populate]=*`;

export const NAVIGATION_API = (location) =>
  `${CMS_URL}/api/growly-navigation?populate[${location}][populate]=*`;

export const MERCADOPAGO_API = "https://api.mercadopago.com";
export const MERCADOPAGO_API_GET_PLANS = (plan) =>
  `${MERCADOPAGO_API}/preapproval_plan/search?status=active&limit=1&q=${plan}`;
export const MERCADOPAGO_API_CREATE_SUBSCRIPTION = `${MERCADOPAGO_API}/preapproval`;

export const PAYMENT_API = "/api/process-payment";
export const PAYMENT_FEE_API = "/api/process-fee-payment";
