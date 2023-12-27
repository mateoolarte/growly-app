import classnames from "classnames";

import "./Button.scss";

export function Button({ type, children, style = "primary", className }) {
  const classNames = classnames("button", className, {
    "button--primary": style === "primary",
  });

  return (
    <button type={type} className={classNames}>
      {children}
    </button>
  );
}
