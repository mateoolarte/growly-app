import classNames from "classnames";

import { ButtonLink } from "@/ui/Button";

import styles from "./Cta.module.scss";

export function Cta(props) {
  const { text, btn, theme } = props;
  const { label, url } = btn || {};

  const containerClassNames = classNames(styles.cta, {
    [styles["cta--dark"]]: theme === "dark",
  });

  return (
    <p className={containerClassNames}>
      {text}
      {label && url && (
        <ButtonLink href={url} style="secondary" size="small">
          {label}
        </ButtonLink>
      )}
    </p>
  );
}
