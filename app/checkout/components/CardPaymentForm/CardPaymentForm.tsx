'use client'
import { sendPayment } from "@/checkout/sendPayment";
import { CardPayment } from "@mercadopago/sdk-react";
import { MercadoPagoWrapper } from "../MercadoPagoWrapper";
import { useRouter } from "next/navigation";

export function CardPaymentForm() {
  const router = useRouter()

  const initialization = {
    amount: 100000,
  };

  const customization = {
    visual: {
      style: {
        customVariables: {
          theme: 'default',
          baseColor: "#f69781"
        }
      }
    },
    paymentMethods: {
      maxInstallments: 3,
    },
  };


  async function onError(error) {
    console.error("onError", error);
  }

  async function onReady() {
    console.log('ready!!')
  }

  async function onSubmit(formData) {
    try {
      const response = await sendPayment(formData);
      const { id: paymentId } = response;
      router.push(`/checkout/status/${paymentId}`)
    } catch (error) {

    }
  }

  return (
    <MercadoPagoWrapper>
      <CardPayment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
        onError={onError}
        onReady={onReady}
      />
    </MercadoPagoWrapper>
  )


}
