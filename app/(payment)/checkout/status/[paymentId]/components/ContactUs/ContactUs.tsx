import Link from "next/link";
import styles from "./ContactUs.module.scss";

export function ContactUs(props) {
  const { message = "¿Alguna duda?" } = props;

  return (
    <p className={styles["contact-us"]}>
      {message}
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
