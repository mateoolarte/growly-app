import { currentUser } from "@clerk/nextjs/server";

import { getNavigationData } from "@/services/getNavigationData";

import styles from "./Nav.module.scss";

import { Item } from "./Item";

export async function Nav() {
  const user = await currentUser();
  const data = await getNavigationData("header");

  const hasData = data && data.length > 0;

  if (!hasData && !user) return null;

  return (
    <nav className={styles.nav}>
      <ul className={styles["nav-list"]}>
        {data.map((item) => {
          if (item.type === "button" && user) return null;

          const classNamesItem = `${styles["nav-item"]} ${user ? styles["nav-item--logged"] : ""}`;

          return (
            <li key={item.id} className={classNamesItem}>
              <Item item={item} styles={styles} user={JSON.stringify(user)} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
