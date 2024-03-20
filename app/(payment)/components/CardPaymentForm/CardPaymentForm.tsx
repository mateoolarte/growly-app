"use client";

import { CardPayment } from "@mercadopago/sdk-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { sendPayment } from "@/services/sendPayment";
import { sendFeePayment } from "@/services/sendFeePayment";

import { MercadoPagoWrapper } from "../MercadoPagoWrapper";

const TITLE_ONE_PAYMENT = "Tarjeta de crédito o débito";
const TITLE_FEE_PAYMENT = "Tarjeta de crédito";

export function CardPaymentForm(props) {
  const { plan, type } = props;
  const { price, priceMaintenance, priceInstallments, slug } = plan;
  const hasInstallments = type === "installments";
  const getPrice = hasInstallments ? priceInstallments : price;
  const acceptedPaymentMethods = hasInstallments ? ["debit_card"] : undefined;
  const titleForm = hasInstallments ? TITLE_FEE_PAYMENT : TITLE_ONE_PAYMENT;

  const customization = {
    paymentMethods: {
      minInstallments: 1,
      maxInstallments: 1,
      types: {
        excluded: acceptedPaymentMethods,
      },
    },
    visual: {
      texts: {
        formTitle: titleForm,
      },
      style: {
        customVariables: {
          baseColor: "#f26a4b",
        },
      },
    },
  };
  const initialization = {
    amount: getPrice,
  };

  const router = useRouter();
  const [error, setError] = useState("");

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
      if (type === "installments") {
        const payloadFee = {
          ...formData,
          plan: slug,
        };

        const response = await sendFeePayment(payloadFee);

        if (response?.status === "authorized") {
          setError("Se creó la suscripción de forma existosa");
        }

        return;
      }

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
