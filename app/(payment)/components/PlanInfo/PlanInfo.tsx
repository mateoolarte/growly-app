import { SelectedPlan } from "../SelectedPlan";

import styles from "./PlanInfo.module.scss";

export function PlanInfo(props) {
  const { plan, benefits, planSlug, type } = props;

  const parsedBenefits = benefits?.filter((item) => {
    if (item.belongPlans[planSlug] === "true") {
      return {
        id: item.id,
        name: item.name,
      };
    }
  });

  return (
    <div className={styles["planInfo"]}>
      <h3 className={styles["planInfo-headline"]}>Resumen de tu compra</h3>
      <SelectedPlan plan={plan} planBenefits={parsedBenefits} type={type} />
    </div>
  );
}
