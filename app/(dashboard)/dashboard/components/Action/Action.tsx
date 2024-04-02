import { Button } from "@/ui/Button";
import styles from "./Action.module.scss";

export function Action() {
  return (
    <div className={styles.action}>
      <h3 className={styles["action-title"]}>Detalles de tu plan</h3>
      <p className={styles["action-description"]}>
        Plan E-commerce, vence el 01/04/2025
      </p>
      <Button size="small" style="secondary">
        Escalar sitio web
      </Button>
    </div>
  );
}
