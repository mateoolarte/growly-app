import * as CheckboxUI from "@radix-ui/react-checkbox";

import { Check } from "../icons/Check";

import styles from "./Checkbox.module.scss";

export function Checkbox(props) {
  const { id, label, checked, handleCheckbox } = props;

  const classNameContainer = `${styles["checkbox-container"]} ${checked ? styles["checkbox-container--checked"] : ""}`;
  const classNameLabel = `${styles["checkbox-label"]} ${checked ? styles["checkbox-label--checked"] : ""}`;

  return (
    <div className={styles.checkbox}>
      <CheckboxUI.Root
        className={classNameContainer}
        id={id}
        checked={checked}
        onCheckedChange={handleCheckbox}
      >
        <CheckboxUI.Indicator className={styles["checkbox-indicator"]}>
          <Check />
        </CheckboxUI.Indicator>
      </CheckboxUI.Root>
      <label className={classNameLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
