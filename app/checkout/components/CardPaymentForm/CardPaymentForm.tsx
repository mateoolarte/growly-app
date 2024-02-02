'use client'
import { sendPayment } from "@/checkout/sendPayment";
import { CardPayment } from "@mercadopago/sdk-react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { MERCADO_PAGO_PUBLIC_KEY } from "@/constants/envs";

export default function CardPaymentForm() {
  if (!MERCADO_PAGO_PUBLIC_KEY) {
    return null;
  }

  initMercadoPago(MERCADO_PAGO_PUBLIC_KEY);

  const initialization = {
    amount: 100000,
  };

  const customization = {
    paymentMethods: {
      maxInstallments: 3,
    },
  };


  async function onError(error) {
    console.log("onError", error);
  }

  async function onReady() {
    console.log('ready!!')
  }

  async function onSubmit(formData) {
    try {
      const response = await sendPayment(formData);
    } catch (error) {

    }
  }

  return (
    <CardPayment
      initialization={initialization}
      customization={customization}
      onSubmit={onSubmit}
      onError={onError}
      onReady={onReady}
    />
  )


}
