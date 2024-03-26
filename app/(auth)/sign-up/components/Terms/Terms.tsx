import Link from "next/link";

import styles from "./Terms.module.scss";

export function Terms() {
  return (
    <p className={styles.terms}>
      Al continuar aceptas nuestros
      <Link href="/terms-and-conditions" className={styles["terms-link"]}>
        términos y condiciones
      </Link>
    </p>
  );
}
