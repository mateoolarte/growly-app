import { getWarrantyPolicyData } from "@/services/getWarrantyPolicyData";

import { metadataGenerator } from "@/utils/metadataGenerator";

import { Layout } from "@/components/Layout";
import { BlocksRenderer } from "@/components/BlocksRenderer";

import "../legal.scss";

export async function generateMetadata() {
  return await metadataGenerator(getWarrantyPolicyData);
}

export default async function WarrantyPolicy() {
  const { content } = await getWarrantyPolicyData();

  if (!content) return null;

  return (
    <Layout>
      <main className="legal warranty-policy">
        <BlocksRenderer data={content} />
      </main>
    </Layout>
  );
}
