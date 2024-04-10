"use client";

import { useRouter } from "next/navigation";

import { ICONS_MAPPER } from "@/constants/iconMapper";
import { ArrowsClockwise } from "@/ui/icons/ArrowsClockwise";

import { plansToSelect } from "./data";

import styles from "./SelectedPlan.module.scss";

export function SelectedPlan(props) {
  const { plan, type } = props;
  const { name, slug } = plan;

  const router = useRouter();

  const Icon = ICONS_MAPPER[slug];

  const handleChangePlan = (e) => {
    const value = e.target.value;
    router.push(value);
  };

  return (
    <div className={styles.selectedPlan}>
      <div className={styles["selectedPlan-title"]}>
        <Icon className={styles["selectedPlan-icon"]} />
        <h2 className={styles["selectedPlan-name"]}>Plan {name}</h2>
      </div>

      <div className={styles["selectedPlan-selector"]}>
        <select
          name="pets"
          id="pet-select"
          className={styles["selectedPlan-button"]}
          onChange={handleChangePlan}
        >
          <option value="">cambiar</option>
          {plansToSelect.map((plan) => (
            <option key={plan.id} value={plan.value}>
              {plan.label}
            </option>
          ))}
        </select>
        <ArrowsClockwise className={styles["selectedPlan-buttonIcon"]} />
      </div>

      {type && (
        <p className={styles["selectedPlan-text"]}>Pago por cuotas (3)</p>
      )}
    </div>
  );
}
