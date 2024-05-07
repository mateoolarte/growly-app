import Link from "next/link";

import { Facebook } from "@/ui/icons/Facebook";
import { Twitter } from "@/ui/icons/Twitter";
import { Linkedin } from "@/ui/icons/Linkedin";

import styles from "./Share.module.scss";

export function Share() {
  return (
    <div className={styles.share}>
      <p className={styles["share-title"]}>Compartir</p>
      <ul className={styles["share-list"]}>
        <li className={styles["share-item"]}>
          <Link href="/" className={styles["share-link"]} aria-label="facebook">
            <Facebook />
          </Link>
        </li>
        <li className={styles["share-item"]}>
          <Link href="/" className={styles["share-link"]} aria-label="linkedin">
            <Linkedin />
          </Link>
        </li>
        <li className={styles["share-item"]}>
          <Link href="/" className={styles["share-link"]} aria-label="twitter">
            <Twitter />
          </Link>
        </li>
      </ul>
    </div>
  );
}
