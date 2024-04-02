import Image from "next/image";

import { Nav } from "./Nav";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container-box">
        <Nav styles={styles} />

        <div className={styles["footer-copyright"]}>
          <Image
            src="/favicon.ico"
            alt="favicon growly"
            width="66"
            height="66"
          />
          <p className={styles["footer-text"]}>
            ©2024 Growly, todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
