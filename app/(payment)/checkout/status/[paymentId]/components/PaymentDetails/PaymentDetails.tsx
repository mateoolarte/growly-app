import dayjs from "dayjs";
import Image from "next/image";

import { LOGO_DARK } from "@/constants/assets";
import { CheckCircle } from "@/ui/icons/CheckCircle";

import styles from "./PaymentDetails.module.scss";

import "dayjs/locale/es-mx";

export function PaymentDetails(props) {
  const { data } = props;

  const { id, description, date_created, transaction_amount } = data;
  const date = dayjs(date_created).format("DD [de] MMMM, h:mm a");

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
            Pagaste: ${transaction_amount?.toLocaleString("es-CO")} a través de
            Mercado pago
          </p>
          <p className={styles["payment-details-text"]}>
            Producto: {description}
          </p>
          <p className={styles["payment-details-text"]}>
            Código de la compra: {id}
          </p>
          <p className={styles["payment-details-text"]}>{date}</p>
        </div>
      </div>
    </>
  );
}
