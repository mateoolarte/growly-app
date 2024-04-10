import { Logo } from "@/ui/Logo";
import { Button, ButtonLink } from "@/ui/Button";

import styles from "./Header.module.scss";
import { Computer } from "@/ui/icons/Computer";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo className={styles["header-logo"]} />
      <div className={styles["header-actions"]}>
        {false && (
          <ButtonLink href="/" target="_blank">
            Ir al sitio web <Computer className={styles["header-icon"]} />
          </ButtonLink>
        )}
        {false && <Button style="secondary">Salir</Button>}
      </div>
    </header>
  );
}
