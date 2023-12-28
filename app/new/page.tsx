import { SectionRenderer } from "./components/SectionRenderer";
import { getLandingData } from "./utils/getLandingData";

export default async function Page() {
  const sections = await getLandingData();

  if (!sections || sections.length <= 0)
    return <h1>Go to strapi admin and add sections</h1>;

  return (
    <main className="home">
      <SectionRenderer data={sections} />
    </main>
  );
}
