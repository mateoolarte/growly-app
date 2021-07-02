// containers
import { HeroTemplate } from "../../../containers/HeroTemplate";
import { TermsTemplate } from "../../../containers/TermsTemplate";
import { CtaTemplate } from "../../../containers/CtaTemplate";

// components
import { Layout } from "../../../components/shared/Layout";

// data
import { plansData } from "../../../data/plans";

// utils
import { getAllTemplates } from "../../../utils/getAllTemplates";
import { getTemplateData } from "../../../utils/getTemplateData";

export default function Template({ template, type }) {
  const { name, features } = template;

  return (
    <Layout title={`Plantilla: ${name}`}>
      <HeroTemplate {...template} type={type} />
      <TermsTemplate features={features} />
      <CtaTemplate />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { type, template } = params;
  const templateData = getTemplateData(plansData, type, template);

  return {
    props: {
      template: templateData,
      type,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllTemplates(plansData);

  return {
    paths,
    fallback: false,
  };
}
