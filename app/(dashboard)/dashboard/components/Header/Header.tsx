import { SignOutButton } from "@clerk/nextjs";

import { Logo } from "@/ui/Logo";
import { Button, ButtonLink } from "@/ui/Button";

import styles from "./Header.module.scss";
import { Computer } from "@/ui/icons/Computer";

export async function Header(props) {
  const { appInfo } = props;
  const { websiteUrl } = appInfo;

  return (
    <header className={styles.header}>
      <Logo className={styles["header-logo"]} />
      <div className={styles["header-actions"]}>
        {websiteUrl && (
          <ButtonLink href={websiteUrl} target="_blank">
            Ir al sitio web <Computer className={styles["header-icon"]} />
          </ButtonLink>
        )}

        <SignOutButton>
          <Button style="secondary">Salir</Button>
        </SignOutButton>
      </div>
    </header>
  );
}
