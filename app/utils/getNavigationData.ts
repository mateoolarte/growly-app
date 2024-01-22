import { navigationApi } from "@/constants/apis";
import { CMS_TOKEN_ACCESS } from "@/constants/envs";

export async function getNavigationData(location) {
  const res = await fetch(navigationApi(location), {
    method: "GET",
    headers: {
      Authorization: `Bearer ${CMS_TOKEN_ACCESS}`,
    },
    cache: "no-store", // TODO: Temp until integrate with webhooks
  });
  const json = await res.json();

  const data = json?.data;
  const attributes = data?.attributes;
  const links = attributes?.[location];

  return links;
}
