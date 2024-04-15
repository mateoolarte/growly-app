import { MercadoPagoConfig, Payment } from "mercadopago";

import { MERCADOPAGO_API_SUBSCRIPTION } from "@/constants/apis";
import { MERCADO_PAGO_ACCESS_KEY } from "@/constants/envs";

export async function GET(request) {
  if (!MERCADO_PAGO_ACCESS_KEY) {
    throw Error("Mercado Pago access key not seated");
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const type = searchParams.get("type");

  if (!id) {
    return Response.json({
      data: null,
      error: "Id must be passed to get the payment information",
    });
  }

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${MERCADO_PAGO_ACCESS_KEY}`,
    },
  };

  if (type) {
    try {
      const response = await fetch(
        `${MERCADOPAGO_API_SUBSCRIPTION}/${id}`,
        options,
      );
      const result = await response.json();

      const data = {
        id: result.id,
        status: result.status,
        description: result.external_reference,
        date_created: result.date_created,
        transaction_amount: result.auto_recurring?.transaction_amount,
        metadata: {
          plan: result.reason,
        },
      };

      return Response.json({
        data,
        error: "",
      });
    } catch (error) {
      console.error("ERROR Getting subscription payment details", error);

      return Response.json({
        data: null,
        error: error.message,
      });
    }
  }

  const client = new MercadoPagoConfig({
    accessToken: MERCADO_PAGO_ACCESS_KEY,
    options: { timeout: 5000 },
  });
  const payment = new Payment(client);

  try {
    const transaction = await payment.get({ id });

    const data = {
      id: transaction.id,
      status: transaction.status,
      description: transaction.description,
      date_created: transaction.date_created,
      transaction_amount: transaction.transaction_amount,
      metadata: transaction.metadata,
    };

    return Response.json({
      data,
      error: "",
    });
  } catch (error) {
    console.error("ERROR Getting payment details", error);

    return Response.json({
      data: null,
      error: error.message,
    });
  }
}
