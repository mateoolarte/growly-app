import { classNamesBtn } from "./classNames";

import "./Button.scss";

export function Button(props) {
  const { type = "button", children, onClick } = props;

  return (
    <button type={type} className={classNamesBtn(props)} onClick={onClick}>
      {children}
    </button>
  );
}
