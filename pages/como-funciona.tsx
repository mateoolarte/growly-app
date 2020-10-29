// vendors
import styled from "styled-components";

// components
import Layout from "../components/shared/Layout";
import Hero from "../components/HeroHowWorks";
import Step from "../components/StepSection";
import Cta from "../components/CtaHowWorks";

// data
import steps from "../data/steps";

// constants
import { MEDIA_QUERIES } from "../constants";

const StepsContainer = styled.div`
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 3rem;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 6rem;
  }
`;

export default function HowWorks() {
  return (
    <Layout title="Cómo funciona - Growly">
      <Hero />

      <StepsContainer>
        {steps.map((step, index) => (
          <Step key={step.id} {...step} isReverse={index % 2 !== 0} />
        ))}
      </StepsContainer>

      <Cta />
    </Layout>
  );
}
