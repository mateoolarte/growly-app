import Link from "next/link";

import { WHATSAPP_NUMBER } from "@/constants";

import styles from "./ContactUs.module.scss";

export function ContactUs(props) {
  const { message = "¿Alguna duda?" } = props;

  return (
    <p className={styles["contact-us"]}>
      {message}
      <Link
        className={styles["contact-us-link"]}
        href={WHATSAPP_NUMBER}
        target="_blank"
      >
        Contáctanos
      </Link>
    </p>
  );
}
