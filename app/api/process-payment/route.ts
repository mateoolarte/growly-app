import { MercadoPagoConfig, Payment } from "mercadopago";

import { MERCADO_PAGO_ACCESS_KEY } from "@/constants/envs";

export async function POST(request: Request) {
  const {
    token,
    transaction_amount,
    installments,
    payment_method_id,
    payer,
    issuer_id,
  } = await request.json();
  const email = payer?.email;

  if (!MERCADO_PAGO_ACCESS_KEY) {
    return Response.json({ error: "No existe una llave de acceso" });
  }
  const client = new MercadoPagoConfig({
    accessToken: MERCADO_PAGO_ACCESS_KEY,
    options: { timeout: 5000 },
  });
  const payment = new Payment(client);

  try {
    const transaction = await payment.create({
      body: {
        transaction_amount,
        payment_method_id,
        installments,
        issuer_id,
        token,
        description: "Landing plan",
        payer: {
          email,
        },
      },
    });

    console.log({ transaction });

    return Response.json({ ok: true });
  } catch (error) {
    console.log({ error });

    return Response.json({ error: "Algo salió mal" });
  }

  return Response.json({ ok: true });
}
