import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

import { parseMediaField } from "@/utils/parseMediaField";
import { parseCategories } from "../../utils/parseCategories";

import styles from "./ArticleHighlight.module.scss";

export function ArticleHighlight(props) {
  const { title, slug, cover, categories, publishedAt } = props;

  const url = `/blog/${slug}`;
  const formattedDate = dayjs(publishedAt).format("DD/MM/YYYY");
  const image = parseMediaField(cover?.data);
  const parsedCategories = parseCategories(categories?.data);
  const hasCategories = parsedCategories && parseCategories.length;

  return (
    <article className={styles.article}>
      <Link href={url} className={styles["article-link"]}>
        {image && (
          <Image
            src={image.url}
            alt={title}
            width={image.width}
            height={image.height}
            className={styles["article-image"]}
          />
        )}

        <div className={styles["article-info"]}>
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
        </div>
        <h2 className={styles["article-title"]}>{title}</h2>
      </Link>
    </article>
  );
}
