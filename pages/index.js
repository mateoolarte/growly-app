// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../utils/constants";

// components
import Layout from "../components/shared/Layout";
import Hero from "../components/Hero";
import HowDoesWorkSection from "../components/HowDoesWorkSection";
import FeatureSection from "../components/FeatureSection";
import CtaHome from "../components/CtaHome";

// data
import { featuresData, heroImages } from "../data/home";

const FeaturesContainer = styled.div`
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 3rem;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 6rem;
  }
`;

export default function Home({ heroImages, features }) {
  return (
    <Layout
      title="Crea el sitio web de tu negocio a bajo costo"
      description="Dale a tu negocio la presencia digital que necesita con sitio web profesional, moderno, económico y al aire en tan solo 5 días."
    >
      <Hero images={heroImages} />

      <HowDoesWorkSection />

      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureSection key={feature.id} {...feature} isAlt={index === 1} />
        ))}
      </FeaturesContainer>

      <CtaHome />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      heroImages,
      features: featuresData,
    },
  };
}
