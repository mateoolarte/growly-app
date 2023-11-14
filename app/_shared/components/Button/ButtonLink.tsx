import Link from "next/link";

import "./Button.scss";

export function ButtonLink({ url, children }) {
  return (
    <Link href={url} className="button">
      {children}
    </Link>
  );
}
