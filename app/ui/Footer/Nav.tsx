import Link from "next/link";

import { getNavigationData } from "@/services/getNavigationData";

export async function Nav(props) {
  const { styles } = props;

  const data = await getNavigationData("footer");
  const hasData = data && data.length > 0;

  if (!hasData) return null;

  return (
    <nav className={styles["footer-nav"]}>
      <ul className={styles["footer-list"]}>
        {data.map((item) => {
          return (
            <li key={item.id} className={styles["footer-item"]}>
              <Link href={item.url || ""} className={styles["footer-link"]}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
