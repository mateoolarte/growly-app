import type { MetadataRoute } from "next";

import { BASE_URL } from "./constants/envs";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/sign-up/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
