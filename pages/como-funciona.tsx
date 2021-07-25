// vendors
import { GetStaticProps } from 'next';

// containers
import { HeroHowWorks } from '../containers/HeroHowWorks';
import { Steps } from '../containers/Steps';
import { CtaHowWorks } from '../containers/CtaHowWorks';

// components
import { Layout } from '../components/shared/Layout';

// data
import { stepsData, IStep } from '../data/steps';

interface IHowWorksProps {
  steps: Array<IStep>;
}

export default function HowWorks({ steps }: IHowWorksProps) {
  return (
    <Layout
      title="Crea el sitio web de tu negocio fácil y rápido"
      description="Creamos tu sitio web fácil y rápido. Elige y compra la plantilla ideal para tu negocio, luego de enviar la información tendrás tu sitio web al aire en 5 días."
    >
      <HeroHowWorks />
      <Steps steps={steps} />
      <CtaHowWorks />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      steps: stepsData,
    },
  };
};
