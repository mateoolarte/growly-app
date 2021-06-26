// containers
import { HomeHero } from "../containers/HomeHero";
import { HowDoesWork } from "../containers/HowDoesWork";
import { Features } from "../containers/Features";
import { CtaHome } from "../containers/CtaHome";

// components
import Layout from "../components/shared/Layout";

// data
import { featuresData, heroImagesData, stepsData } from "../data/home";

export default function Home({ heroImages, features, steps }) {
  return (
    <Layout
      title="Crea el sitio web de tu negocio a bajo costo"
      description="Dale a tu negocio la presencia digital que necesita con sitio web profesional, moderno, económico y al aire en tan solo 5 días."
    >
      <HomeHero images={heroImages} />
      <HowDoesWork steps={steps} />
      <Features features={features} />
      <CtaHome />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      heroImages: heroImagesData,
      features: featuresData,
      steps: stepsData,
    },
  };
}
