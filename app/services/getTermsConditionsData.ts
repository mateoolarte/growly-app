import { TERMS_CONDITIONS_API } from "@/constants/apis";
import { CMS_TOKEN_ACCESS } from "@/constants/envs";

export async function getTermsConditionsData() {
  try {
    const res = await fetch(TERMS_CONDITIONS_API, {
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
    console.error({ function: "getTermsConditionsData", error });

    return {
      content: null,
      seo: null,
    };
  }
}
