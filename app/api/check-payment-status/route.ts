import {
  MERCADOPAGO_API_SUBSCRIPTION,
  MERCADOPAGO_API_PAYMENTS,
} from "@/constants/apis";
import { MERCADO_PAGO_ACCESS_KEY } from "@/constants/envs";

export async function GET(request) {
  if (!MERCADO_PAGO_ACCESS_KEY) {
    throw Error("Mercado Pago access key not seated");
  }

  try {
    // const res = await request.json();

    // console.log({ res });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const type = searchParams.get("type");

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${MERCADO_PAGO_ACCESS_KEY}`,
      },
    };
    const response = await fetch(MERCADOPAGO_API_PAYMENTS(id), options);
    const json = await response.json();

    console.log({ json });
  } catch (error) {
    console.log({ error });
  }

  return Response.json({
    message: "Hello World",
  });
}
