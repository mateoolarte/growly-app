// containers
import { HomeHero } from "../containers/HomeHero";
import { HowDoesWork } from "../containers/HowDoesWork";
import { Features } from "../containers/Features";
import { CtaHome } from "../containers/CtaHome";

// components
import { Layout } from "../components/shared/Layout";

// data
import { carouselImages } from "../data/carouselImages";
import { featuresData } from "../data/features";
import { howWorksData } from "../data/howWorks";

export default function Home({ heroImages, features, howWorks }) {
  return (
    <Layout
      title="Crea el sitio web de tu negocio a bajo costo"
      description="Dale a tu negocio la presencia digital que necesita con sitio web profesional, moderno, económico y al aire en tan solo 5 días."
    >
      <HomeHero images={heroImages} />
      <HowDoesWork howWorks={howWorks} />
      <Features features={features} />
      <CtaHome />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      heroImages: carouselImages,
      features: featuresData,
      howWorks: howWorksData,
    },
  };
}
