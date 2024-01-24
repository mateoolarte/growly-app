"use client";

import { initMercadoPago } from "@mercadopago/sdk-react";
import { MERCADO_PAGO_PUBLIC_KEY } from "@/constants/envs";
import CardPaymentForm from "./components/CardPaymentForm/CardPaymentForm";
import { useState } from "react";
import PaymentStatus from "./components/PaymentStatus/PaymentStatus";
import { sendPayment } from "./sendPayment";

export default function Checkout() {
  const [paymentId, setPaymentId] = useState(0)
  const [paymentError, setPaymentError] = useState(false)

  if (!MERCADO_PAGO_PUBLIC_KEY) {
    return null;
  }

  initMercadoPago(MERCADO_PAGO_PUBLIC_KEY);

  async function onSubmit(formData) {
    try {
      const { id: paymentId } = await sendPayment(formData);
      setPaymentId(paymentId)
    } catch (error) {
      setPaymentError(true)
    }
  }

  return (
    <div>
      <h1>Checkout</h1>
      {!paymentError && paymentId ?
        <PaymentStatus paymentId={paymentId} /> :
        <CardPaymentForm onSubmit={onSubmit} />
      }
      {paymentError && (
        <div>
          Ha ocurrido un problema ! intenta de nuevo más tarde
          <button>
            intentar de nuevo
          </button>
        </div>
      )}
    </div>
  );
}
