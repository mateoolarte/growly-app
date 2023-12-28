import { CMS_API_TOKEN_ACCESS } from "@/constants";
import { LANDING_API } from "../constants";

export async function getLandingData() {
  const res = await fetch(LANDING_API, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${CMS_API_TOKEN_ACCESS}`,
    },
  });
  const json = await res.json();

  const data = json?.data;
  const attributes = data?.attributes;
  const sections = attributes?.sections;

  return sections;
}
