import { PLAN_API } from "@/constants/apis";
import { CMS_TOKEN_ACCESS } from "@/constants/envs";

export async function getPlanDetail(planSlug) {
  try {
    const res = await fetch(PLAN_API(planSlug), {
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
    const pricing = sections.find(
      (section) => section["__component"] === "growly.pricing",
    );
    const plans = pricing?.plans;
    const plan = plans[0];

    return plan;
  } catch (error) {
    console.error({ function: "getPlanDetail", error });

    return null;
  }
}
