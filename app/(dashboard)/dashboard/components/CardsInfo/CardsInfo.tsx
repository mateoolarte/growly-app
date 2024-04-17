"use client";

import { useState } from "react";

import { Modal } from "@/ui/Modal";

import { firstTimeData, defaultData } from "./data";

import { Card, CardInProgress } from "../Card";
import { Marketplace } from "../Marketplace";

import styles from "./CardsInfo.module.scss";

export function CardsInfo() {
  const [activeModal, setActiveModal] = useState("");

  function handleModal(type) {
    setActiveModal(type);
  }

  const tiles = true
    ? firstTimeData
    : defaultData(() => handleModal("marketplace"));
  const inProgressState = true;

  if (inProgressState) {
    return <CardInProgress />;
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
