import Link from "next/link";

import { getNavigationData } from "@/services/getNavigationData";
import { User } from "@/assets/icons/User";

import { ButtonLink } from "../Button";

export async function Nav(props) {
  const { styles } = props;

  const data = await getNavigationData("header");

  const hasData = data && data.length > 0;

  if (!hasData) return null;

  return (
    <nav className={styles["header-nav"]}>
      <ul className={styles["header-list"]}>
        {data.map((item) => {
          return (
            <li key={item.id} className={styles["header-item"]}>
              {renderLink({ item, styles })}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function renderLink(options) {
  const { item, styles } = options;
  const { title, type, url } = item;

  if (type === "button-alt") {
    return (
      <Link href={url || ""} className={styles["header-login"]}>
        <User className={styles["header-login-icon"]} />
        <span>{title}</span>
      </Link>
    );
  }

  if (type === "button") {
    return (
      <ButtonLink href={url || ""} size="small">
        {title}
      </ButtonLink>
    );
  }

  return (
    <Link href={url || ""} className={styles["header-link"]}>
      {title}
    </Link>
  );
}
