import Link from "next/link";

import "./Button.scss";
import { classNamesBtn } from "./classNames";

export function ButtonLink(props) {
  const { url, children } = props;

  return (
    <Link href={url} className={classNamesBtn(props)}>
      {children}
    </Link>
  );
}
