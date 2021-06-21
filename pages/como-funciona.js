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
import { MEDIA_QUERIES } from "../utils/constants";

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
    <Layout
      title="Crea el sitio web de tu negocio fácil y rápido"
      description="Creamos tu sitio web fácil y rápido. Elige y compra la plantilla ideal para tu negocio, luego de enviar la información tendrás tu sitio web al aire en 5 días."
    >
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

export async function getStaticProps() {
  return {
    props: {},
  };
}
