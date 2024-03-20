import { MERCADOPAGO_API_GET_PLANS } from "@/constants/apis";
import { MERCADO_PAGO_ACCESS_KEY } from "@/constants/envs";

export async function getSubscriptionPlan(data) {
  try {
    const { plan } = data;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${MERCADO_PAGO_ACCESS_KEY}`,
      },
    };
    const response = await fetch(MERCADOPAGO_API_GET_PLANS(plan), options);
    const json = await response.json();
    const results = json?.results ?? [];
    const selectedPlan = results[0] ?? {};

    return selectedPlan;
  } catch (error) {
    throw Error("ERROR getting subscription plan", { cause: error });
  }
}
