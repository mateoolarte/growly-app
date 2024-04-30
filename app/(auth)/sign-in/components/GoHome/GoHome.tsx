import Link from "next/link";

import { Home } from "@/ui/icons/Home";

import styles from "./GoHome.module.scss";

export function GoHome() {
  return (
    <Link href="/" className={styles.gohome}>
      <Home className={styles["gohome-icon"]} />
      Volver al inicio
    </Link>
  );
}
