import Link from "next/link";
import styles from "./Article.module.scss";

export function Article() {
  return (
    <article className={styles.article}>
      <Link href="/" className={styles["article-link"]}>
        <h2 className={styles["article-title"]}>
          How does writing influence your personal brand?
        </h2>
        <p className={styles["article-description"]}>
          Another factor to take into account has to do with the nature of the
          rewards you expect to give your customers
        </p>
        <time dateTime="" className={styles["article-date"]}>
          03/03/2023
        </time>
        <ul className={styles["article-categories"]}>
          <li className={styles["article-category"]}>Brand</li>
          <li className={styles["article-category"]}>Writing</li>
        </ul>
      </Link>
    </article>
  );
}
