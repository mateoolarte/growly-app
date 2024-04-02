import { Action } from "../Action";

import styles from "./Actions.module.scss";

export function Actions() {
  return (
    <div className={styles.actions}>
      <Action />
      <Action />
      <Action />
    </div>
  );
}
