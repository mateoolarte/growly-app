"use client";

import dayjs from "dayjs";

import { Action } from "../Action";

import styles from "./Actions.module.scss";

function parsePlanName(name, installments) {
  if (name === "landing" && installments === "3") {
    return "Plan Landing a 3 cuotas";
  }

  if (name === "landing" && installments === "1") {
    return "Plan Landing";
  }

  return "";
}

export function Actions(props) {
  const { planInfo } = props;
  const { name, installments, createdAt } = planInfo;

  const dueData = dayjs(createdAt).add(1, "year").format("DD/MM/YYYY");

  const items = [
    {
      id: 1,
      title: "Detalles de tu plan",
      description: `${parsePlanName(name, installments)}, vence el ${dueData}`,
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
