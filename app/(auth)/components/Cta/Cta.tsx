import { ButtonLink } from "@/ui/Button";

import styles from "./Cta.module.scss";

export function Cta(props) {
  const { text, btn } = props;
  const { label, url } = btn || {};

  return (
    <p className={styles.cta}>
      {text}
      {label && url && (
        <ButtonLink href={url} style="secondary" size="small">
          {label}
        </ButtonLink>
      )}
    </p>
  );
}
