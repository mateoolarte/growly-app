// vendors
import { useState } from 'react';

// components
import { Layout } from '../../components/shared/Layout';

// containers
import { HeroTemplates } from '../../containers/HeroTemplates';
import { TemplatesList } from '../../containers/TemplatesList';
import { CtaTemplates } from '../../containers/CtaTemplates';

// data
import { plansData, IPlan } from '../../data/plans';

interface TemplatesPageProps {
  plans: Array<IPlan>;
}

export default function Templates({ plans }: TemplatesPageProps) {
  const [currentPlan, setCurrentPlan] = useState(0);

  return (
    <Layout
      title="Sitios web para independientes, emprendedores y PYMES"
      description="El sitio web ideal para comenzar la presencia digital de tu negocio, plantillas de lujo y un servicio profesional para tener tu sitio web listo en 5 días."
    >
      <HeroTemplates
        plans={plans}
        currentPlan={currentPlan}
        handleCurrentPlan={setCurrentPlan}
      />
      <TemplatesList plans={plans} currentPlan={currentPlan} />
      <CtaTemplates />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      plans: plansData,
    },
  };
}
