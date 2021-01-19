// vendors
import { useRouter } from "next/router";

// components
import Layout from "../../components/shared/Layout";
import Hero from "../../components/HeroSingleTemplate";
import Terms from "../../components/TermsTemplateSection";
import Cta from "../../components/CtaSingleTemplate";

// data
import plans from "../../data/plans";

export default function SingleTemplate() {
  const router = useRouter();
  const { theme, type } = router?.query;
  const templateType = plans.find((item) => item.title === type);
  const template = templateType?.templates.find((item) => item.name === theme);

  return (
    <Layout title={`Plantilla: ${theme} - Growly`}>
      <Hero
        {...template}
        type={type}
        pricing={templateType?.pricing}
        priceInCents={templateType?.priceInCents}
        pricingPremium={templateType?.pricingPremium}
        pricePremiumInCents={templateType?.pricePremiumInCents}
      />

      <Terms features={templateType?.features} />
      <Cta />
    </Layout>
  );
}
