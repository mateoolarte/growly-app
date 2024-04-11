import Image from "next/image";

import { LOGO_DARK } from "@/constants/assets";
import { CheckCircle } from "@/ui/icons/CheckCircle";

import styles from "./PaymentDetails.module.scss";

export function PaymentDetails() {
  return (
    <>
      <Image
        src={LOGO_DARK}
        width="204"
        height="61"
        alt="Logo growly"
        className={styles["payment-details-logo"]}
      />

      <div className={styles["payment-details-container"]}>
        <div className={styles["payment-details-info"]}>
          <div className={styles["payment-details-heading"]}>
            <span className={styles["payment-details-icon"]}>
              <CheckCircle />
            </span>
            <h2 className={styles["payment-details-title"]}>
              Pago procesado <br /> exitosamente.
            </h2>
          </div>

          <p className={styles["payment-details-text"]}>
            Gracias por confiar en nosotros, juntos vamos a elevar la presencia
            digital de tu negocio
          </p>
        </div>

        <hr className={styles["payment-details-divider"]} />

        <div className={styles["payment-details-information"]}>
          <h3 className={styles["payment-details-subtitle"]}>
            Resumen de tu compra
          </h3>
          <p className={styles["payment-details-text"]}>
            Pagaste $5&apos;814.000 a través de Mercado pago
          </p>
          <p className={styles["payment-details-text"]}>
            Producto: Plan E-commerce
          </p>
          <p className={styles["payment-details-text"]}>
            Código de la compra: #444444
          </p>
          <p className={styles["payment-details-text"]}>01 de abril, 12:48pm</p>
        </div>
      </div>
    </>
  );
}
