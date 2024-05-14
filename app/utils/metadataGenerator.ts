import { parseMediaField } from "./parseMediaField";

export async function metadataGenerator(dataFetcher) {
  const { seo } = (await dataFetcher()) ?? {};

  const image = parseMediaField(seo?.metaImage?.data);

  const title = seo?.metaTitle ?? "";
  const description = seo?.metaDescription ?? "";
  const ogImage = {
    url: image?.url,
    width: image?.width,
    height: image?.height,
  };

  return {
    title,
    description,
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
