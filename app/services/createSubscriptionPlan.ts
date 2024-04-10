import { MERCADOPAGO_API_SUBSCRIPTION } from "@/constants/apis";
import { MERCADO_PAGO_ACCESS_KEY } from "@/constants/envs";

export async function createSubscriptionPlan(data) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MERCADO_PAGO_ACCESS_KEY}`,
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(MERCADOPAGO_API_SUBSCRIPTION, options);
    const result = await response.json();

    return result;
  } catch (error) {
    throw Error("ERROR creating subscription plan", { cause: error });
  }
}
