"use client";

import { StatusScreen } from "@mercadopago/sdk-react";

export default function PaymentStatus({ paymentId }) {

  const initialization = {
    paymentId
  };

  async function onReady() {
    console.log('ready');
  }

  async function onError(error) {
    console.log("onError", error);
  }

  return (
    <div>
      <StatusScreen
        initialization={initialization}
        onReady={onReady}
        onError={onError}
      />
    </div>
  );
}
