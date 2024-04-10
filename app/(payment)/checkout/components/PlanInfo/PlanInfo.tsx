import { Benefits } from "../Benefits";
import { Pricing } from "../Pricing";
import { SelectedPlan } from "../SelectedPlan";

import styles from "./PlanInfo.module.scss";

export function PlanInfo(props) {
  const { plan, benefits, planSlug, type } = props;

  return (
    <div className={styles["planInfo"]}>
      <h3 className={styles["planInfo-headline"]}>Resumen de tu compra</h3>

      <SelectedPlan plan={plan} type={type} />
      <Pricing plan={plan} type={type} />
      <Benefits benefits={benefits} planSlug={planSlug} />
    </div>
  );
}
