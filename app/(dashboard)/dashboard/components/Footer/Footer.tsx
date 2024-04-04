import Image from "next/image";

import styles from "./Footer.module.scss";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Image src="/favicon.ico" width={32} height={32} alt="Growly icon" />
      <p className={styles["footer-text"]}>
        ©{currentYear} Growly, todos los derechos reservados
      </p>
    </footer>
  );
}
