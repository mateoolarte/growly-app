import { SECTIONS_MAPPER } from "@/(homepage)/constants/sectionsMapper";

import { SectionRenderer } from "@/ui/SectionRenderer";
import { getLandingData } from "@/services/getLandingData";
import { Header } from "@/ui/Header";
import { Footer } from "@/ui/Footer";
import { CMS_URL } from "@/constants/envs";

export async function generateMetadata() {
  const { seoTags } = await getLandingData();

  const title = seoTags?.metaTitle ?? "";
  const description = seoTags?.metaDescription ?? "";
  const ogImage = {
    url: `${CMS_URL}${seoTags?.metaImage?.data?.attributes?.url}`,
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

export default async function Homepage() {
  const { sections } = await getLandingData();

  if (!sections || sections.length <= 0)
    return <h1>Go to strapi admin and add sections</h1>;

  return (
    <>
      <Header />
      <main className="home">
        <SectionRenderer data={sections} components={SECTIONS_MAPPER} />
      </main>
      <Footer />
    </>
  );
}
