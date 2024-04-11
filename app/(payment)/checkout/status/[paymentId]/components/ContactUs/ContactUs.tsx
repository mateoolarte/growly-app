import Link from "next/link";
import styles from "./ContactUs.module.scss";

export function ContactUs() {
  return (
    <p className={styles["contact-us"]}>
      ¿Alguna duda?
      <Link
        className={styles["contact-us-link"]}
        href="https://wa.me/573183540619"
        target="_blank"
      >
        Contáctanos
      </Link>
    </p>
  );
}
