import { Card } from "../Card";

import styles from "./CardsInfo.module.scss";

export function CardsInfo() {
  return (
    <div className={styles.cardsInfo}>
      <Card />
      <Card />
    </div>
  );
}
