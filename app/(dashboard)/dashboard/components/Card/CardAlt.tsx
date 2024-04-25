import { Pepper } from "@/ui/icons/Pepper";
import { Cart } from "@/ui/icons/Cart";

import styles from "./CardAlt.module.scss";
import { ButtonLink } from "@/ui/Button";

const iconMapper = {
  "in-progress": Pepper,
  "no-payment": Cart,
};

export function CardAlt(props) {
  const { status, title, description, cta } = props;

  const Icon = iconMapper[status];

  return (
    <div className={styles.cardAlt}>
      <div className={styles["cardAlt-heading"]}>
        <span className={styles["cardAlt-icon"]}>
          <Icon />
        </span>
        <h2 className={styles["cardAlt-title"]}>{title}</h2>
      </div>
      <p
        className={styles["cardAlt-description"]}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {cta && (
        <ButtonLink href={cta?.url} className={styles["cardAlt-cta"]}>
          {cta?.label}
        </ButtonLink>
      )}
    </div>
  );
}
