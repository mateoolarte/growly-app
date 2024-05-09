import { ARTICLE_API } from "@/constants/apis";
import { CMS_TOKEN_ACCESS } from "@/constants/envs";

export async function getArticleData(slug) {
  try {
    const res = await fetch(ARTICLE_API(slug), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${CMS_TOKEN_ACCESS}`,
      },
      cache: "no-store", // TODO: Temp until integrate with webhooks
    });
    const json = await res.json();
    const data = json?.data;
    const info = data?.[0] || null;
    const article = info?.attributes;

    return article;
  } catch (error) {
    console.error({ function: "getArticleData", error });

    return null;
  }
}
