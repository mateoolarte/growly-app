import classnames from "classnames";

import "./Button.scss";

export function Button(props) {
  const { type = "button", children, style = "primary", className } = props;
  const classNames = classnames("button", className, {
    "button--primary": style === "primary",
  });

  return (
    <button type={type} className={classNames}>
      {children}
    </button>
  );
}
