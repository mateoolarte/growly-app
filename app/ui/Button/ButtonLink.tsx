import Link from "next/link";

import { classNamesBtn } from "./classNames";

export function ButtonLink(props) {
  const { href, target, children } = props;

  return (
    <Link href={href} target={target} className={classNamesBtn(props)}>
      {children}
    </Link>
  );
}
