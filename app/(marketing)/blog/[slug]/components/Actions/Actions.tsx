import { BtnBack } from "../BtnBack";
import { Share } from "../Share";

import styles from "./Actions.module.scss";

export function Actions() {
  return (
    <div className={styles.actions}>
      <BtnBack />
      <Share />
    </div>
  );
}
