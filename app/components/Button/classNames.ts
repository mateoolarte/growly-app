import classNames from "classnames";

export function classNamesBtn(props) {
  const { className, style = "primary" } = props;

  return classNames("button", className, `button--${style}`);
}
