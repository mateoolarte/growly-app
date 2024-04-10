"use client";

import { Action } from "../Action";

import styles from "./Actions.module.scss";

export function Actions() {
  const items = [
    {
      id: 1,
      title: "Detalles de tu plan",
      description: "Plan E-commerce, vence el 01/04/2025",
    },
    {
      id: 2,
      title: "Ayúdanos a mejorar Growly",
      description: "Comparte tus ideas con nosotros.",
      // btn: {
      //   label: "Enviar sugerencia",
      //   action: () => {},
      // },
    },
    {
      id: 3,
      title: "¿Problemas técnicos?",
      description: "Contacta con soporte",
      btn: {
        label: "Contáctanos",
        url: "https://wa.me/573183540619",
        target: "_blank",
      },
    },
  ];

  return (
    <div className={styles.actions}>
      {items.map((item) => {
        return <Action key={item.id} {...item} />;
      })}
    </div>
  );
}
