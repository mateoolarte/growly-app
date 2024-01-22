import classNames from "classnames";

export function classNamesBtn(props) {
  const { className, style = "primary", size } = props;

  return classNames("button", className, `button--${style}`, {
    [`button--${size}`]: size,
  });
}
