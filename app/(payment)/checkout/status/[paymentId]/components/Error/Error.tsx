import { SmileySad } from "@/ui/icons/SmileySad";
import { ButtonLink } from "@/ui/Button";

import { ContactUs } from "../ContactUs";

import styles from "./Error.module.scss";

export function ErrorComponent() {
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
        <p className={styles["error-text"]}>Producto: Plan E-commerce</p>
        <p className={styles["error-text"]}>
          Código de la transacción: #444444
        </p>
        <p className={styles["error-text"]}>01 de abril, 12:48pm</p>
      </div>

      <div className={styles["error-actions"]}>
        <ButtonLink href="/checkout" className={styles["error-btn"]}>
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
