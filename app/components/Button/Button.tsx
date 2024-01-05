import { classNamesBtn } from "./classNames";

import "./Button.scss";

export function Button(props) {
  const { type = "button", children } = props;

  return (
    <button type={type} className={classNamesBtn(props)}>
      {children}
    </button>
  );
}
