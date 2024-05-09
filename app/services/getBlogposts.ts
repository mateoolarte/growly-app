import { BLOG_API } from "@/constants/apis";
import { CMS_TOKEN_ACCESS } from "@/constants/envs";

export async function getBlogpostsData() {
  try {
    const res = await fetch(BLOG_API, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${CMS_TOKEN_ACCESS}`,
      },
      cache: "no-store", // TODO: Temp until integrate with webhooks
    });
    const json = await res.json();
    const data = json?.data;

    return data;
  } catch (error) {
    console.error({ function: "getBlogpostsData", error });

    return [];
  }
}
