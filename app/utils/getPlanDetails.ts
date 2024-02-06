import { LANDING_API, PLAN_API } from "@/constants/apis";
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
    const plan = sections[0]?.plans[0]

    return plan;
  } catch (error) {
    console.error({ function: "getPlanDetail", error });

    return null;
  }
}
