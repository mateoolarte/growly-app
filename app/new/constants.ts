import { CMS_URL } from "@/constants";

import { Hero } from "./components/Hero";
import { Ai } from "./components/Ai";
import { Features } from "./components/Features";

import { Magic } from "@/assets/icons/Magic";
import { Devices } from "@/assets/icons/Devices";
import { Lightning } from "@/assets/icons/Lightning";
import { Lock } from "@/assets/icons/Lock";
import { Mail } from "@/assets/icons/Mail";
import { Seo } from "@/assets/icons/Seo";
import { Pricing } from "./components/Pricing";
import { HowItWorks } from "./components/HowItWorks";
import { FAQ } from "./components/FAQ";
import { Megafone } from "@/assets/icons/Megafone";
import { Layers } from "@/assets/icons/Layers";
import { Shop } from "@/assets/icons/Shop";

export const LANDING_API = `${CMS_URL}/api/growly-landing?populate[sections][populate]=*`;

export const SECTIONS_MAPPER = {
  "growly.hero": Hero,
  "growly.ai": Ai,
  "growly.features": Features,
  "growly.pricing": Pricing,
  "growly.how-it-works": HowItWorks,
  "growly.faq": FAQ,
};

export const ICONS_MAPPER = {
  devices: Devices,
  lightning: Lightning,
  lock: Lock,
  magic: Magic,
  mail: Mail,
  seo: Seo,
  landing: Megafone,
  corporate: Layers,
  ecommerce: Shop,
};

export const HIGHLIGHTED_PLAN = "corporate";
