"use client";

import { CardPayment } from "@mercadopago/sdk-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { IS_BROWSER_ENV } from "@/constants/envs";

import { sendPayment } from "@/services/sendPayment";
import { sendFeePayment } from "@/services/sendFeePayment";

import { Alert } from "@/ui/Alert";

import { MercadoPagoWrapper } from "../MercadoPagoWrapper";
import { formStyles } from "./styles";

const TITLE_ONE_PAYMENT = "Tarjeta de crédito o débito";
const TITLE_FEE_PAYMENT = "Tarjeta de crédito";

const initialAlertState = {
  isActive: false,
  title: "",
  message: "",
  type: "error",
};

export function CardPaymentForm(props) {
  const { plan, type } = props;

  const router = useRouter();
  const [alert, setAlert] = useState(initialAlertState);

  const { price, priceInstallments, slug } = plan;
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
        customVariables: formStyles,
      },
    },
  };
  const initialization = {
    amount: getPrice,
  };

  useEffect(() => {
    return () => {
      if (IS_BROWSER_ENV && window.cardPaymentBrickController) {
        window.cardPaymentBrickController.unmount();
      }
    };
  }, []);

  async function onError(error) {
    setAlert({
      isActive: true,
      title: "Ha ocurrido un error",
      message: error.message,
      type: "error",
    });
  }

  async function onSubmit(formData) {
    try {
      let paymentId = "";
      let errorMessage = "";

      if (type === "installments") {
        const payloadFee = {
          ...formData,
          plan: slug,
          description: `Plan ${plan?.slug} a 3 cuotas`,
        };

        const response = await sendFeePayment(payloadFee);
        const { id, error } = response;

        paymentId = id;
        errorMessage = error;
      } else {
        const payload = {
          ...formData,
          description: `Plan ${plan?.slug} a un pago`,
          metadata: {
            plan: slug,
          },
        };

        const response = await sendPayment(payload);
        const { id, error } = response;

        paymentId = id;
        errorMessage = error;
      }

      if (errorMessage) {
        setAlert({
          isActive: true,
          title: "Ha ocurrido un error",
          message: errorMessage,
          type: "error",
        });

        return;
      }

      if (paymentId) {
        router.push(
          `/checkout/status/${paymentId}${hasInstallments ? "?type=installments" : ""}`,
        );
      }
    } catch (error) {
      setAlert({
        isActive: true,
        title: "Ha ocurrido un error",
        message: error.message,
        type: "error",
      });
    }
  }

  return (
    <MercadoPagoWrapper>
      <CardPayment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
        onError={onError}
      />
      <Alert
        isOpen={alert?.isActive}
        handleAlert={() => setAlert(initialAlertState)}
        type={alert?.type}
        title={alert?.title}
      >
        {alert?.message}
      </Alert>
    </MercadoPagoWrapper>
  );
}
