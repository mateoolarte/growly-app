// vendors
import { useState } from "react";
import styled from "styled-components";

// components
import Layout from "../../components/shared/Layout";
import Hero from "../../components/HeroTemplates";
import TemplateSection from "../../components/TemplateSection";
import Cta from "../../components/CtaTemplates";

// data
import plans from "../../data/plans";

const TemplatesContainer = styled.section`
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 4rem;
`;

const Heading = styled.h3`
  margin-bottom: 4rem;
  font-size: 28px;
  text-align: center;
`;

export default function Templates() {
  const [currentPlan, setCurrentPlan] = useState(0);

  return (
    <Layout title="Plantillas - Growly">
      <Hero
        plans={plans}
        currentPlan={currentPlan}
        handleCurrentPlan={setCurrentPlan}
      />

      <TemplatesContainer>
        <Heading>Selecciona la plantilla ideal para a tu negocio</Heading>

        {plans[currentPlan].templates.map((template, index) => (
          <TemplateSection
            key={template.id}
            {...template}
            isReverse={index % 2 !== 0}
          />
        ))}
      </TemplatesContainer>

      <Cta />
    </Layout>
  );
}
