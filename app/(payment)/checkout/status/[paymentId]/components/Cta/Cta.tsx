import { ButtonLink } from "@/ui/Button";

import styles from "./Cta.module.scss";

export function Cta() {
  return (
    <div className={styles["cta-container"]}>
      <ButtonLink href="/dashboard" className={styles["cta-btn"]}>
        Ir al dashboard
      </ButtonLink>
    </div>
  );
}
