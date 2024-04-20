import { CMS_URL } from "./envs";

export const LANDING_API = `${CMS_URL}/api/landing?populate[sections][populate]=*&populate[seo][populate]=*`;

export const PLAN_API = (planSlug) =>
  `${CMS_URL}/api/landing?populate[sections][filters][name][$contains]=pricing&populate[sections][populate][plans][filters][slug][$eq]=${planSlug}`;
export const PLAN_BENEFITS_API = (planSlug) =>
  `${CMS_URL}/api/pricing-benefit?populate[items][filters][belongPlans][${planSlug}][$eq]=true`;
export const BENEFITS_API = `${CMS_URL}/api/pricing-benefit?populate[items][populate]=*`;

export const NAVIGATION_API = (location) =>
  `${CMS_URL}/api/navigation?populate[${location}][populate]=*`;

export const TERMS_CONDITIONS_API = `${CMS_URL}/api/term-and-condition?populate[content]=*`;
export const PRIVACY_POLICY_API = `${CMS_URL}/api/privacy-policy?populate[content]=*`;
export const WARRANTY_POLICY_API = `${CMS_URL}/api/warranty-policy?populate[content]=*`;

export const MERCADOPAGO_API = "https://api.mercadopago.com";
export const MERCADOPAGO_API_GET_PLANS = (plan) =>
  `${MERCADOPAGO_API}/preapproval_plan/search?status=active&limit=1&q=${plan}`;
export const MERCADOPAGO_API_SUBSCRIPTION = `${MERCADOPAGO_API}/preapproval`;

export const PAYMENT_API = "/api/process-payment";
export const PAYMENT_FEE_API = "/api/process-fee-payment";
export const PAYMENT_STATUS_API = "/api/payment-status";
