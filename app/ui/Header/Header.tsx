import Link from "next/link";

import { Logo } from "@/ui/Logo";

import { Nav } from "./Nav";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container-box">
        <div className={styles["header-container"]}>
          <Link href="/">
            <Logo className={styles["header-logo"]} />
          </Link>

          <Nav />
        </div>
      </div>
    </header>
  );
}
