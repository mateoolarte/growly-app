"use client";

import { Checkbox } from "@/ui/Checkbox";

import styles from "./Marketplace.module.scss";
import { useState } from "react";

export function Marketplace() {
  const [selectedService, setSelectedService] = useState({ id: "", name: "" });

  const { id, name } = selectedService;

  function handleService(service) {
    setSelectedService({ id: "", name: service });
  }

  return (
    <div className={styles.marketplace}>
      <h3 className={styles["marketplace-title"]}>
        Elige el superpoder que quieres adicionar a tu sitio web
      </h3>
      <ul className={styles["marketplace-list"]}>
        <li
          className={styles["marketplace-item"]}
          onClick={() => handleService("test")}
        >
          <Checkbox
            id="test"
            label="Google analytics"
            checked={name === "test"}
            // handleCheckbox={() => handleService("test")}
          />
          <p className={styles["marketplace-item-description"]}>
            $32,000 / año
          </p>
        </li>
        <li
          className={styles["marketplace-item"]}
          onClick={() => handleService("test2")}
        >
          <Checkbox
            id="test2"
            label="Sistema de reservas"
            checked={name === "test2"}
            // handleCheckbox={() => handleService("test2")}
          />
          <p className={styles["marketplace-item-description"]}>
            $32,000 / año
          </p>
        </li>
      </ul>
    </div>
  );
}
