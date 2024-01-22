"use client";

import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";

import { sendPayment } from "./sendPayment";
import { MERCADO_PAGO_PUBLIC_KEY } from "@/constants/envs";

export default function Checkout() {
  if (!MERCADO_PAGO_PUBLIC_KEY) {
    return null;
  }

  initMercadoPago(MERCADO_PAGO_PUBLIC_KEY);

  const initialization = {
    amount: 100000,
  };

  async function onSubmit(formData) {
    console.log({ formData });

    sendPayment(formData);
  }

  async function onError(error) {
    console.log("onError", error);
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CardPayment
        initialization={initialization}
        onSubmit={onSubmit}
        onError={onError}
      />
    </div>
  );
}
