import Link from "next/link";

import { ArrowCircleLeft } from "@/assets/icons/ArrowCircleLeft";
import { ButtonLink } from "@/ui/Button";
import { Logo } from "@/ui/Logo";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <Link href="/">
          <Logo className={styles["header-logo"]} />
        </Link>

        <ButtonLink
          href="/"
          style="secondary"
          className={styles["header-btnBack"]}
        >
          <ArrowCircleLeft />
          Volver
        </ButtonLink>
      </div>
      <h1 className={styles["header-title"]}>
        Estás a un paso de ser parte de Growly
      </h1>
    </header>
  );
}
