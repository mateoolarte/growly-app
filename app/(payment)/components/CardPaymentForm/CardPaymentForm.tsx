"use client";

import { CardPayment } from "@mercadopago/sdk-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { sendPayment } from "@/services/sendPayment";

import { MercadoPagoWrapper } from "../MercadoPagoWrapper";

const customization = {
  paymentMethods: {
    minInstallments: 1,
    maxInstallments: 1,
  },
  visual: {
    style: {
      customVariables: {
        baseColor: "#f26a4b",
      },
    },
  },
};

export function CardPaymentForm(props) {
  const { plan } = props;
  const { price, priceMaintenance, priceInstallments } = plan;

  const router = useRouter();
  const [error, setError] = useState("");
  const pricing = {
    price: price?.toLocaleString("es-CO"),
    priceNum: price,
    priceMaintenance: priceMaintenance?.toLocaleString("es-CO"),
    priceMaintenanceNum: priceMaintenance,
    priceInstallments: priceInstallments?.toLocaleString("es-CO"),
    priceInstallmentsNum: priceInstallments,
    currency: "COP",
  };

  const initialization = {
    amount: pricing?.priceNum,
  };

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.cardPaymentBrickController) {
        window.cardPaymentBrickController.unmount();
      }
    };
  }, []);

  async function onError(error) {
    console.error("onError", error);

    setError(error.message);
  }

  async function onSubmit(formData) {
    try {
      const payload = {
        ...formData,
        description: `Growly plan: ${plan?.slug} a un pago`,
      };

      const response = await sendPayment(payload);

      const { id: paymentId } = response;

      router.push(`/checkout/status/${paymentId}`);
    } catch (error) {}
  }

  return (
    <MercadoPagoWrapper>
      <CardPayment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
        onError={onError}
      />
      {error && <p>{error}</p>}
    </MercadoPagoWrapper>
  );
}
