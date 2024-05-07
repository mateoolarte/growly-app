import Link from "next/link";

import { ArrowLeft } from "@/ui/icons/ArrowLeft";

import styles from "./BtnBack.module.scss";

export function BtnBack() {
  return (
    <Link href="/blog" className={styles["btn-back"]}>
      <span className={styles["btn-back-icon"]}>
        <ArrowLeft />
      </span>
      Volver al blog
    </Link>
  );
}
