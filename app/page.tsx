import { SECTIONS_MAPPER } from "@/constants/sectionsMapper";

import { SectionRenderer } from "./ui/SectionRenderer";
import { getLandingData } from "./utils/getLandingData";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";

export default async function Page() {
  const sections = await getLandingData();

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
