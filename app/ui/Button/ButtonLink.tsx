import Link from "next/link";

import { classNamesBtn } from "./classNames";

import "./Button.scss";

export function ButtonLink(props) {
  const { href, children } = props;

  return (
    <Link href={href} className={classNamesBtn(props)}>
      {children}
    </Link>
  );
}
