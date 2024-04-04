import { Button, ButtonLink } from "@/ui/Button";
import styles from "./Action.module.scss";

export function Action(props) {
  const { title, description, btn } = props;
  const { label, action, url, target } = btn || {};

  const isBtn = btn && action && !url;
  const isUrl = btn && url && !action;

  return (
    <div className={styles.action}>
      {title && <h3 className={styles["action-title"]}>{title}</h3>}

      {description && (
        <p className={styles["action-description"]}>{description}</p>
      )}

      {isBtn && (
        <Button size="small" style="secondary" onClick={action}>
          {label}
        </Button>
      )}

      {isUrl && (
        <ButtonLink href={url} target={target}>
          {label}
        </ButtonLink>
      )}
    </div>
  );
}
