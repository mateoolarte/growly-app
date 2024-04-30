"use client";

import dayjs from "dayjs";

import { parsePlanName } from "./parsePlanName";

import { Action } from "../Action";

import styles from "./Actions.module.scss";

export function Actions(props) {
  const { planInfo } = props;
  const { name, installments, createdAt } = planInfo;

  const dueData = dayjs(createdAt).add(1, "year").format("DD/MM/YYYY");
  const currentPlan =
    name && installments
      ? `${parsePlanName(name, installments)}, vence el ${dueData}`
      : "Sin plan";

  const items = [
    {
      id: 1,
      title: "Detalles de tu plan",
      description: currentPlan,
    },
    // {
    //   id: 2,
    //   title: "Ayúdanos a mejorar Growly",
    //   description: "Comparte tus ideas con nosotros.",
    //   btn: {
    //     label: "Enviar sugerencia",
    //     action: () => {},
    //   },
    // },
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
