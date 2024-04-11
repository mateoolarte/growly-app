import { MERCADO_PAGO_ACCESS_KEY } from "@/constants/envs";
import { createSubscriptionPlan } from "@/services/createSubscriptionPlan";
import { getSubscriptionPlan } from "@/services/getSubscriptionPlan";

export async function POST(request: Request) {
  if (!MERCADO_PAGO_ACCESS_KEY) {
    throw Error("Mercado Pago access key not seated");
  }

  const requestData = await request.json();
  const { plan, token, payer } = requestData;

  try {
    const selectedPlan = await getSubscriptionPlan({ plan });

    const planId = selectedPlan?.id || "";

    const payload = {
      card_token_id: token,
      payer_email: payer?.email ?? "",
      preapproval_plan_id: planId,
    };
    const subscriptionPlan = await createSubscriptionPlan(payload);

    return Response.json({
      id: subscriptionPlan?.id ?? "",
      error: subscriptionPlan?.message ?? "",
    });
  } catch (error) {
    console.error("ERROR Creating subscription plan", error);

    return Response.json({
      id: "",
      error: error.message,
    });
  }
}
