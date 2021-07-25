// vendors
import { GetStaticPaths, GetStaticProps } from 'next';

// containers
import { HeroTemplate } from '../../../containers/HeroTemplate';
import { TermsTemplate } from '../../../containers/TermsTemplate';
import { CtaTemplate } from '../../../containers/CtaTemplate';

// components
import { Layout } from '../../../components/shared/Layout';

// data
import { plansData } from '../../../data/plans';

// utils
import { getAllTemplates } from '../../../utils/getAllTemplates';
import {
  getTemplateData,
  ISingleTemplateData,
} from '../../../utils/getTemplateData';

interface ITemplatePageProps {
  template: ISingleTemplateData;
  type: string;
}

export default function Template({ template, type }: ITemplatePageProps) {
  // TODO: add description to every template to improve SEO search
  const { name, features } = template;

  return (
    <Layout title={`Plantilla: ${name}`}>
      <HeroTemplate {...template} type={type} />
      <TermsTemplate features={features} />
      <CtaTemplate />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { type, template } = params;
  const templateData = getTemplateData(plansData, type, template);

  return {
    props: {
      template: templateData,
      type,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllTemplates(plansData);

  return {
    paths,
    fallback: false,
  };
};
