import { Hero } from "@/(homepage)/components/Hero";
import { Ai } from "@/(homepage)/components/Ai";
import { Features } from "@/(homepage)/components/Features";
import { Pricing } from "@/(homepage)/components/Pricing";
import { HowItWorks } from "@/(homepage)/components/HowItWorks";
import { FAQ } from "@/(homepage)/components/FAQ";
import { Cta } from "@/(homepage)/components/Cta";

export const SECTIONS_MAPPER = {
  "growly.hero": Hero,
  "growly.ai": Ai,
  "growly.features": Features,
  "growly.pricing": Pricing,
  "growly.how-it-works": HowItWorks,
  "growly.faq": FAQ,
  "growly.banner-cta": Cta,
};
