import Link from "next/link";
import dayjs from "dayjs";

import { parseCategories } from "../../utils/parseCategories";

import styles from "./Article.module.scss";

export function Article(props) {
  const { title, slug, categories, excerpt, publishedAt } = props;

  const url = `/blog/${slug}`;
  const formattedDate = dayjs(publishedAt).format("DD/MM/YYYY");
  const parsedCategories = parseCategories(categories?.data);
  const hasCategories = parsedCategories && parseCategories.length;

  return (
    <article className={styles.article}>
      <Link href={url} className={styles["article-link"]}>
        <h2 className={styles["article-title"]}>{title}</h2>
        <p className={styles["article-description"]}>{excerpt}</p>
        <time className={styles["article-date"]}>{formattedDate}</time>

        {hasCategories && (
          <ul className={styles["article-categories"]}>
            {parsedCategories?.map((item) => {
              return (
                <li key={item.id} className={styles["article-category"]}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        )}
      </Link>
    </article>
  );
}
