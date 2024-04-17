import { Pepper } from "@/ui/icons/Pepper";

import styles from "./CardInProgress.module.scss";

export function CardInProgress() {
  return (
    <div className={styles.cardInProgress}>
      <div className={styles["cardInProgress-heading"]}>
        <span className={styles["cardInProgress-icon"]}>
          <Pepper />
        </span>
        <h2 className={styles["cardInProgress-title"]}>
          Estamos creando tu sitio web
        </h2>
      </div>
      <p className={styles["cardInProgress-description"]}>
        Estamos en la construcción de tu sitio web, te enviaremos una
        notificación a tu correo con cada fase del proceso. <br /> Si tienes
        alguna pregunta, no dudes en contactarnos
      </p>
    </div>
  );
}
