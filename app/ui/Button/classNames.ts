import classNames from "classnames";

import styles from "./Button.module.scss";

export function classNamesBtn(props) {
  const { className, style = "primary", size } = props;

  return classNames(styles.button, className, styles[`button--${style}`], {
    [styles[`button--${size}`]]: size,
  });
}
