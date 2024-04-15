import { MercadoPagoConfig, Payment } from "mercadopago";
import { MERCADO_PAGO_ACCESS_KEY } from "@/constants/envs";

export async function POST(request: Request) {
  if (!MERCADO_PAGO_ACCESS_KEY) {
    throw Error("Mercado Pago access key not seated");
  }

  const requestData = await request.json();
  const {
    token,
    transaction_amount,
    installments,
    payment_method_id,
    payer,
    issuer_id,
    description,
    metadata,
  } = requestData;

  const client = new MercadoPagoConfig({
    accessToken: MERCADO_PAGO_ACCESS_KEY,
    options: { timeout: 5000 },
  });
  const payment = new Payment(client);

  try {
    const transaction = await payment.create({
      body: {
        description,
        installments,
        issuer_id,
        payer,
        payment_method_id,
        token,
        transaction_amount,
        metadata,
      },
    });

    return Response.json({ id: transaction?.id, error: "" });
  } catch (error) {
    console.error("ERROR Creating payment", error);

    return Response.json({ id: "", error: error.message });
  }
}
