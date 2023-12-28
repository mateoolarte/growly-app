import { CMS_URL } from "@/constants";
import { Hero } from "./components/Hero";
import { Ai } from "./components/Ai";

export const LANDING_API = `${CMS_URL}/api/growly-landing?populate[sections][populate]=*`;

export const SECTIONS_MAPPER = {
  "growly.hero": Hero,
  "growly.ai": Ai,
};
