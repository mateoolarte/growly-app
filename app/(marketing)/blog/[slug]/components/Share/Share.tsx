import Link from "next/link";

import { Facebook } from "@/ui/icons/Facebook";
import { Twitter } from "@/ui/icons/Twitter";
import { Linkedin } from "@/ui/icons/Linkedin";

import styles from "./Share.module.scss";
import { BASE_URL } from "@/constants/envs";

export function Share(props) {
  const { slug } = props;
  const baseUrl = `${BASE_URL}/blog`;
  const url = encodeURIComponent(`${baseUrl}/${slug}`);

  return (
    <div className={styles.share}>
      <p className={styles["share-title"]}>Compartir</p>
      <ul className={styles["share-list"]}>
        <li className={styles["share-item"]}>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            className={styles["share-link"]}
            aria-label="facebook"
          >
            <Facebook />
          </Link>
        </li>
        <li className={styles["share-item"]}>
          <Link
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
            target="_blank"
            className={styles["share-link"]}
            aria-label="linkedin"
          >
            <Linkedin />
          </Link>
        </li>
        <li className={styles["share-item"]}>
          <Link
            href={`https://twitter.com/intent/tweet?url=${url}`}
            target="_blank"
            className={styles["share-link"]}
            aria-label="twitter"
          >
            <Twitter />
          </Link>
        </li>
      </ul>
    </div>
  );
}
