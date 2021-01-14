// vendors
import { useRouter } from "next/router";

// components
import Layout from "../../components/shared/Layout";
import Hero from "../../components/HeroSingleTemplate";

// data
import plans from "../../data/plans";

export default function SingleTemplate() {
  const router = useRouter();
  const { theme, type } = router?.query;
  const templateType = plans.find((item) => item.title === type);
  const currentTemplate = templateType?.templates.find(
    (item) => item.name === theme
  );

  return (
    <Layout title={`Plantilla: ${theme} - Growly`}>
      <Hero {...currentTemplate} />
    </Layout>
  );
}
