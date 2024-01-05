import Link from "next/link";

import { classNamesBtn } from "./classNames";

import "./Button.scss";

export function ButtonLink(props) {
  const { url, children } = props;

  return (
    <Link href={url} className={classNamesBtn(props)}>
      {children}
    </Link>
  );
}
