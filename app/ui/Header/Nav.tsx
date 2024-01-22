import Link from "next/link";
import { ButtonLink } from "../Button";
import { User } from "@/assets/icons/User";

export function Nav(props) {
  const { data } = props;

  return (
    <ul className="header-list">
      {data.map((item) => {
        return (
          <li className="header-listItem" key={item.id}>
            {renderLink(item)}
          </li>
        );
      })}
    </ul>
  );
}

function renderLink(item) {
  const { title, type, url } = item;

  if (title === "Login") {
    return (
      <Link href={url || ""} className="header-listLogin">
        <User className="header-listLoginIcon" />
        {title}
      </Link>
    );
  }

  if (type === "button") {
    return (
      <ButtonLink url={url || ""} size="small">
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
