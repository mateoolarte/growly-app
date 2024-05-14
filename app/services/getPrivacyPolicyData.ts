import { PRIVACY_POLICY_API } from "@/constants/apis";
import { CMS_TOKEN_ACCESS } from "@/constants/envs";

export async function getPrivacyPolicyData() {
  try {
    const res = await fetch(PRIVACY_POLICY_API, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${CMS_TOKEN_ACCESS}`,
      },
      cache: "no-store", // TODO: Temp until integrate with webhooks
    });
    const json = await res.json();

    const data = json?.data;
    const attributes = data?.attributes;
    const content = attributes?.content;
    const seo = attributes?.seo;

    return { content, seo };
  } catch (error) {
    console.error({ function: "getPrivacyPolicyData", error });

    return {
      content: null,
      seo: null,
    };
  }
}
