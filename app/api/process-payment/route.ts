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
  } = requestData;

  const client = new MercadoPagoConfig({
    accessToken: MERCADO_PAGO_ACCESS_KEY,
    options: { timeout: 5000 },
  });
  const payment = new Payment(client);

  try {
    const transaction = await payment.create({
      body: {
        transaction_amount,
        description,
        payment_method_id,
        installments,
        issuer_id,
        token,
        payer,
      },
    });

    return Response.json({ ok: true, id: transaction.id });
  } catch (error) {
    console.log({ error });
    throw Error("ERROR Creating payment", { cause: error });
  }
}
