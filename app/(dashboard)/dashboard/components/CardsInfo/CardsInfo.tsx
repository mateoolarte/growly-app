"use client";

import { useState } from "react";

import { Modal } from "@/ui/Modal";

import { firstTimeData, defaultData } from "./data";

import { Card, CardAlt } from "../Card";
import { Marketplace } from "../Marketplace";

import styles from "./CardsInfo.module.scss";

export function CardsInfo(props) {
  const { appInfo, hasCustomerPlan } = props;
  const { status } = appInfo;

  const [activeModal, setActiveModal] = useState("");

  function handleModal(type) {
    setActiveModal(type);
  }

  const tiles =
    status === "initial"
      ? firstTimeData
      : defaultData(() => handleModal("marketplace"));
  const inProgressState = status === "in-progress";

  if (inProgressState) {
    const inProgressProps = {
      status: "in-progress",
      title: "Estamos creando tu sitio web",
      description:
        "Estamos en la construcción de tu sitio web, te enviaremos una notificación a tu correo con cada fase del proceso. <br /> Si tienes alguna pregunta, no dudes en contactarnos",
    };

    return <CardAlt {...inProgressProps} />;
  }

  if (!hasCustomerPlan) {
    const noPaymentProps = {
      status: "no-payment",
      title: "Debes comprar un plan para comenzar",
      description:
        "Selecciona el plan que se adapte mejor a tus necesidades y elige pagar entre 1 o 3 cuotas, según tu conveniencia.",
      cta: {
        label: "Ver planes",
        url: "/#precios",
      },
    };

    return <CardAlt {...noPaymentProps} />;
  }

  return (
    <>
      <div className={styles.cardsInfo}>
        {tiles.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>

      <Modal
        title="Escala tu sitio web"
        isOpen={activeModal}
        handleModal={() => handleModal("")}
      >
        {activeModal === "marketplace" && <Marketplace />}
      </Modal>
    </>
  );
}
