import { LANDING_API } from "@/constants/apis";
import { CMS_TOKEN_ACCESS } from "@/constants/envs";

export async function getLandingData() {
  try {
    const res = await fetch(LANDING_API, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${CMS_TOKEN_ACCESS}`,
      },
      cache: "no-store", // TODO: Temp until integrate with webhooks
    });
    const json = await res.json();

    const data = json?.data;
    const attributes = data?.attributes;
    const sections = attributes?.sections;
    const seo = attributes?.seo;

    return { sections, seo };
  } catch (error) {
    console.error({ function: "getLandingData", error });

    return {
      sections: null,
      seo: null,
    };
  }
}
