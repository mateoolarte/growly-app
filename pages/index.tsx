// containers
import { HomeHero } from '../containers/HomeHero';
import { HowDoesWork } from '../containers/HowDoesWork';
import { Features } from '../containers/Features';
import { CtaHome } from '../containers/CtaHome';

// components
import { Layout } from '../components/shared/Layout';

// data
import { carouselImages, ICarouselImage } from '../data/carouselImages';
import { featuresData, IFeatures } from '../data/features';
import { howWorksData, IHowWorks } from '../data/howWorks';

interface HomePageProps {
  heroImages: Array<ICarouselImage>;
  features: Array<IFeatures>;
  howWorks: IHowWorks;
}

export default function Home({ heroImages, features, howWorks }: HomePageProps) {
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
