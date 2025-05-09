import dayjs from "dayjs";

import { SmileySad } from "@/ui/icons/SmileySad";
import { ButtonLink } from "@/ui/Button";

import { ContactUs } from "../ContactUs";

import styles from "./Error.module.scss";

import "dayjs/locale/es-mx";

export function ErrorComponent(props) {
  const { data } = props;

  const { id, description, date_created, metadata } = data;
  const { plan } = metadata || {};

  const date = dayjs(date_created).format("DD [de] MMMM, h:mm a");
  const checkoutUrl = `/checkout/${plan}`;

  return (
    <div className={styles.error}>
      <span className={styles["error-icon"]}>
        <SmileySad />
      </span>

      <h1 className={styles["error-title"]}>
        Lo sentimos, no pudimos procesar tu pago
      </h1>
      <p className={styles["error-description"]}>
        Hubo un error con tu tarjeta de crédito, revisa bien los campos o
        intenta con otro método de pago
      </p>

      <hr className={styles["error-divider"]} />

      <div className={styles["error-details"]}>
        <h2 className={styles["error-details-title"]}>Resumen</h2>
        <p className={styles["error-text"]}>Producto: {description}</p>
        <p className={styles["error-text"]}>Código de la transacción: {id}</p>
        <p className={styles["error-text"]}>{date}</p>
      </div>

      <div className={styles["error-actions"]}>
        <ButtonLink href={checkoutUrl} className={styles["error-btn"]}>
          Intentar nuevamente
        </ButtonLink>
        <ButtonLink href="/" style="secondary" className={styles["error-btn"]}>
          Volver al inicio
        </ButtonLink>
      </div>

      <ContactUs />
    </div>
  );
}
