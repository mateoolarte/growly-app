import styles from "./Headline.module.scss";

export function Headline() {
  return (
    <div className={styles.headline}>
      <h1 className={styles["headline-title"]}>
        El futuro digital comienza aquí
      </h1>
      <h2 className={styles["headline-description"]}>
        Crea tu cuenta para comenzar
      </h2>
    </div>
  );
}
