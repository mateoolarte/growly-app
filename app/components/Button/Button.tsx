import classnames from "classnames";

import "./Button.scss";
import { classNamesBtn } from "./classNames";

export function Button(props) {
  const { type = "button", children } = props;

  return (
    <button type={type} className={classNamesBtn(props)}>
      {children}
    </button>
  );
}
