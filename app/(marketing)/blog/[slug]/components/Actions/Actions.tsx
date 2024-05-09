import { BtnBack } from "../BtnBack";
import { Share } from "../Share";

import styles from "./Actions.module.scss";

export function Actions(props) {
  const { slug } = props;

  return (
    <div className={styles.actions}>
      <BtnBack />
      <Share slug={slug} />
    </div>
  );
}
