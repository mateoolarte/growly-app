import { HEADER_API } from "@/constants/apis";
import { CMS_TOKEN_ACCESS } from "@/constants/envs";

export async function getHeaderData() {
  const res = await fetch(HEADER_API, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${CMS_TOKEN_ACCESS}`,
    },
    cache: "no-store", // TODO: Temp until integrate with webhooks
  });
  const json = await res.json();

  const data = json?.data;
  const attributes = data?.attributes;
  const links = attributes?.links;

  return links;
}
