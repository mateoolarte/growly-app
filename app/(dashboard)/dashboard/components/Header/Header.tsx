import { Logo } from "@/ui/Logo";
import { Button } from "@/ui/Button";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo className={styles["header-logo"]} />
      <Button style="secondary">Salir</Button>
    </header>
  );
}
