import { getTermsConditionsData } from "@/services/getTermsConditionsData";

import { Layout } from "@/components/Layout";
import { BlocksRenderer } from "../components/BlocksRenderer";

import "../legal.scss";

export default async function TermsAndConditions() {
  const { content } = await getTermsConditionsData();

  if (!content) return null;

  return (
    <Layout>
      <main className="legal terms-and-conditions">
        <BlocksRenderer data={content} />
      </main>
    </Layout>
  );
}
