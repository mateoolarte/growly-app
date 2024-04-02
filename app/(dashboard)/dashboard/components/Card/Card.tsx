import { Button } from "@/ui/Button";
import styles from "./Card.module.scss";
import { CheckCircle } from "@/assets/icons/CheckCircle";

export function Card() {
  return (
    <div className={styles.card}>
      <span className={styles["card-icon"]}>
        <CheckCircle />
      </span>
      <div className={styles["card-content"]}>
        <h2 className={styles["card-title"]}>Google Form</h2>
        <p className={styles["card-description"]}>
          Completa el formulario para recopilar la información necesaria que
          necesitamos para comenzar con el diseño de tu sitio web.
        </p>
        <Button size="small">Continuar con el formulario</Button>
      </div>
    </div>
  );
}
