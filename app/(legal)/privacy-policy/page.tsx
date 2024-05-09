import { getPrivacyPolicyData } from "@/services/getPrivacyPolicyData";

import { Layout } from "@/components/Layout";
import { BlocksRenderer } from "@/components/BlocksRenderer";

import "../legal.scss";

export default async function PrivacyPolicy() {
  const { content } = await getPrivacyPolicyData();

  if (!content) return null;

  return (
    <Layout>
      <main className="legal privacy-policy">
        <BlocksRenderer data={content} />
      </main>
    </Layout>
  );
}
