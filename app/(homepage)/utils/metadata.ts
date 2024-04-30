import { CMS_URL, IS_DEV_ENV } from "@/constants/envs";

import { getLandingData } from "@/services/getLandingData";

export async function homepageMetadata() {
  const { seoTags } = await getLandingData();

  const title = seoTags?.metaTitle ?? "";
  const description = seoTags?.metaDescription ?? "";
  const ogImage = {
    url: `${IS_DEV_ENV ? CMS_URL : ""}${seoTags?.metaImage?.data?.attributes?.url}`,
    width: seoTags?.metaImage?.data?.attributes?.width,
    height: seoTags?.metaImage?.data?.attributes?.height,
  };

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://usegrowly.com",
      siteName: "Growly",
      images: [ogImage],
      locale: "es_CO",
      type: "website",
    },
  };
}
