import { headers } from "next/headers";

import { BASE_URL } from "@/constants/envs";

import { parseMediaField } from "./parseMediaField";

export async function metadataGenerator(dataFetcher) {
  const { seo } = (await dataFetcher()) ?? {};

  const headersList = headers();
  const currentUrl = headersList.get("x-url") || "";

  const image = parseMediaField(seo?.metaImage?.data);

  const title = seo?.metaTitle ?? "";
  const description = seo?.metaDescription ?? "";
  const ogImage = {
    url: image?.url,
    width: image?.width,
    height: image?.height,
  };

  return {
    metadataBase: BASE_URL,
    title,
    description,
    alternates: {
      canonical: currentUrl,
    },
    openGraph: {
      title,
      description,
      siteName: "Growly",
      images: [ogImage],
      locale: "es_CO",
      type: "website",
    },
  };
}
