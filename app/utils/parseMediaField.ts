import { CMS_URL, IS_DEV_ENV } from "@/constants/envs";

export function parseMediaField(data) {
  const { attributes } = data;

  return {
    url: `${IS_DEV_ENV ? `${CMS_URL}${attributes?.url}` : attributes?.url}`,
    width: attributes?.width,
    height: attributes?.height,
  };
}
