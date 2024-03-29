import classNames from "classnames";

import styles from "./Headline.module.scss";

export function Headline(props) {
  const { title, description, theme } = props;
  const containerClassNames = classNames(styles.headline, {
    [styles["headline--dark"]]: theme === "dark",
  });

  return (
    <div className={containerClassNames}>
      <h1 className={styles["headline-title"]}>{title}</h1>
      <h2 className={styles["headline-description"]}>{description}</h2>
    </div>
  );
}
