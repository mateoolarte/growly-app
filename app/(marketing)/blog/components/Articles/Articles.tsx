import { Article, ArticleHighlight } from "../Article";

import styles from "./Articles.module.scss";

export function Articles() {
  return (
    <section className={styles.articles}>
      <ArticleHighlight />
      <Article />
      <Article />
      <Article />
      <Article />
    </section>
  );
}
