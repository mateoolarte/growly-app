import { Article, ArticleHighlight } from "../Article";

import styles from "./Articles.module.scss";

export function Articles(props) {
  const { data } = props;

  if (!data || !data.length) return null;

  return (
    <section className={styles.articles}>
      {data.map((item, index) => {
        const { id, attributes } = item;

        if (index === 0) return <ArticleHighlight key={id} {...attributes} />;

        return <Article key={id} {...attributes} />;
      })}
    </section>
  );
}
