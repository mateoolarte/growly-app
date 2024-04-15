import { PAYMENT_STATUS_API } from "@/constants/apis";
import { BASE_URL } from "@/constants/envs";

export async function getPaymentStatus(data) {
  const { id, type } = data;

  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `${BASE_URL}/${PAYMENT_STATUS_API}?id=${id}${type ? `&type=${type}` : ""}`;
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error({ function: "getPaymentStatus", error });
  }
}
