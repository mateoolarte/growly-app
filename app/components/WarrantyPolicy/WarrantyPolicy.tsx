import { ICONS_MAPPER } from "@/constants/iconMapper";

import styles from "./WarrantyPolicy.module.scss";

const SealWarningIcon = ICONS_MAPPER.sealWarning;

export function WarrantyPolicy() {
  return (
    <div className={styles["warranty-policy"]}>
      <SealWarningIcon />
      <p>Si no cumplimos tus expectativas, te devolvemos el dinero.</p>
      <a href="">Conoce nuestra política de garantía</a>
    </div>
  );
}
