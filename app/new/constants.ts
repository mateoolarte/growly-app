import { CMS_API_URL } from "@/constants";
import { Hero } from "./components/Hero";

export const LANDING_API = `${CMS_API_URL}growly-landing?populate[sections][populate]=*`;

export const SECTIONS_MAPPER = {
  "growly.hero": Hero,
};
