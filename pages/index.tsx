// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../constants";

// components
import Layout from "../components/shared/Layout";
import Hero from "../components/Hero";
import HowDoesWorkSection from "../components/HowDoesWorkSection";
import FeatureSection from "../components/FeatureSection";
import CtaHome from "../components/CtaHome";

// data
import features from "../data/features";

const FeaturesContainer = styled.div`
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 3rem;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 6rem;
  }
`;

export default function Home() {
  return (
    <Layout title="Inicio - Growly">
      <Hero />

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
