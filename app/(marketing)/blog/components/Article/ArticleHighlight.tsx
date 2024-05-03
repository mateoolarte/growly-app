import Image from "next/image";

import styles from "./ArticleHighlight.module.scss";
import Link from "next/link";

export function ArticleHighlight() {
  return (
    <article className={styles.article}>
      <Link href="/" className={styles["article-link"]}>
        <Image
          src="/homepage/graph.png"
          alt="Image highlight"
          width={1280}
          height={330}
          className={styles["article-image"]}
        />
        <div className={styles["article-info"]}>
          <time dateTime="" className={styles["article-date"]}>
            03/03/2023
          </time>
          <ul className={styles["article-categories"]}>
            <li className={styles["article-category"]}>Marketing</li>
            <li className={styles["article-category"]}>Marketing</li>
            <li className={styles["article-category"]}>Marketing</li>
          </ul>
        </div>
        <h2 className={styles["article-title"]}>
          How to choose the right colors when creating a website?
        </h2>
      </Link>
    </article>
  );
}
