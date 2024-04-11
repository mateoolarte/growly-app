import styles from "./HeadlineForm.module.scss";

export function HeadlineForm() {
  return (
    <div className={styles["headline-form"]}>
      <h2 className={styles["headline-form-title"]}>
        Esta nave está a punto de despegar
      </h2>
      <p className={styles["headline-form-description"]}>
        Crea tu cuenta para comenzar
      </p>
    </div>
  );
}
