"use client";

import { MERCADO_PAGO_PUBLIC_KEY } from "@/constants/envs";
import { StatusScreen, initMercadoPago } from "@mercadopago/sdk-react";

export default function PaymentStatus({ params }) {
  if (!MERCADO_PAGO_PUBLIC_KEY) return null;

  initMercadoPago(MERCADO_PAGO_PUBLIC_KEY);

  const { paymentId } = params;

  const initialization = {
    paymentId,
  };

  async function onError(error) {
    console.error("onError", error);
  }

  return (
    <main>
      <StatusScreen initialization={initialization} onError={onError} />
    </main>
  );
}
