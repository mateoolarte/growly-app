import Link from "next/link";

import { WHATSAPP_NUMBER } from "@/constants";

import { Plan } from "./Plan";

import styles from "./Plans.module.scss";

export function Plans(props) {
  const { data, withInstallments, tooltip, benefits } = props;

  return (
    <>
      <p className={styles["plans-label"]}>
        ¿Necesitas mas opciones de financiamiento?{" "}
        <Link
          href={WHATSAPP_NUMBER}
          target="_blank"
          className={styles["plans-link"]}
        >
          Haz clic acá
        </Link>
      </p>

      <div className={styles.plans}>
        {data?.map((item) => {
          return (
            <Plan
              key={item.id}
              {...item}
              withInstallments={withInstallments}
              benefits={benefits}
              tooltip={tooltip}
            />
          );
        })}
      </div>
    </>
  );
}
