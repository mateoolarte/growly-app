import Link from "next/link";

import { getNavigationData } from "@/services/getNavigationData";
import { User } from "@/assets/icons/User";

import { ButtonLink } from "../Button";

export async function Nav() {
  const data = await getNavigationData("header");

  const hasData = data && data.length > 0;

  if (!hasData) return null;

  return (
    <nav className="header-nav">
      <ul className="header-list">
        {data.map((item) => {
          return (
            <li key={item.id} className="header-listItem">
              {renderLink(item)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function renderLink(item) {
  const { title, type, url } = item;

  if (title === "Login") {
    return (
      <Link href={url || ""} className="header-listLogin">
        <User className="header-listLoginIcon" />
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
    <Link href={url || ""} className="header-listLink">
      {title}
    </Link>
  );
}
