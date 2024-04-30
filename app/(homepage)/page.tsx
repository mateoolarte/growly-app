import { SECTIONS_MAPPER } from "@/(homepage)/constants/sectionsMapper";

import { getLandingData } from "@/services/getLandingData";

import { homepageMetadata as generateMetadata } from "./utils/metadata";

import { SectionRenderer } from "@/ui/SectionRenderer";

import { Layout } from "@/components/Layout";

export { generateMetadata };

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
