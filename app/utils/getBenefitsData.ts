import { BENEFITS_API } from "@/constants/apis";
import { CMS_TOKEN_ACCESS } from "@/constants/envs";

export async function getBenefitsData(planSlug) {
  const res = await fetch(BENEFITS_API, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${CMS_TOKEN_ACCESS}`,
    },
    cache: "no-store", // TODO: Temp until integrate with webhooks
  });
  const json = await res.json();

  const data = json?.data;
  const attributes = data?.attributes;
  const items = attributes?.items;
  const benefits = items?.filter((item) => {
    if (item.belongPlans[planSlug] === "true") {
      return {
        id: item.id,
        name: item.name,
      };
    }
  });

  return benefits;
}
