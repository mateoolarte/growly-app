'use client'
import { sendPayment } from "@/checkout/sendPayment";
import { CardPayment } from "@mercadopago/sdk-react";
import { useRouter } from 'next/navigation'

export default function CardPaymentForm() {
  const router = useRouter()

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
      const { id: paymentId } = await sendPayment(formData);
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
