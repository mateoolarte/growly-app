import { CardPayment } from "@mercadopago/sdk-react";
import { useRouter } from 'next/navigation'

export default function CardPaymentForm({ onSubmit }) {
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

  return (
    <CardPayment
      initialization={initialization}
      customization={customization}
      onSubmit={onSubmit}
      onError={onError}
    />
  )


}
