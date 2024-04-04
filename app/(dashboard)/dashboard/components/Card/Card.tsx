import { Button, ButtonLink } from "@/ui/Button";

import styles from "./Card.module.scss";

export function Card(props) {
  const { Icon, title, description, btn } = props;
  const { label, action, url, target } = btn ?? {};

  const isBtn = btn && action && !url;
  const isUrl = btn && url && !action;

  return (
    <div className={styles.card}>
      {Icon && (
        <span className={styles["card-icon"]}>
          <Icon />
        </span>
      )}
      <div className={styles["card-content"]}>
        {title && <h2 className={styles["card-title"]}>{title}</h2>}
        {description && (
          <p className={styles["card-description"]}>{description}</p>
        )}

        {isBtn && <Button onClick={action}>{label}</Button>}

        {isUrl && (
          <ButtonLink href={url} target={target}>
            {label}
          </ButtonLink>
        )}
      </div>
    </div>
  );
}
