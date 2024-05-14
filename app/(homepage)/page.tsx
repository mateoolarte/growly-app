import { getLandingData } from "@/services/getLandingData";

import { metadataGenerator } from "@/utils/metadataGenerator";

import { SectionRenderer } from "@/ui/SectionRenderer";

import { SECTIONS_MAPPER } from "@/(homepage)/constants/sectionsMapper";

import { Layout } from "@/components/Layout";

export async function generateMetadata() {
  return await metadataGenerator(getLandingData);
}

export default async function Homepage() {
  const { sections } = await getLandingData();

  if (!sections || sections.length <= 0)
    return <h1>Go to strapi admin and add sections</h1>;

  return (
    <Layout>
      <main className="home">
        <SectionRenderer data={sections} components={SECTIONS_MAPPER} />
      </main>
    </Layout>
  );
}
