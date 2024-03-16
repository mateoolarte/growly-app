import { SelectedPlan } from "../SelectedPlan";

import "./PlanInfo.scss";

export function PlanInfo(props) {
  const { plan, benefits, planSlug } = props;

  const parsedBenefits = benefits?.filter((item) => {
    if (item.belongPlans[planSlug] === "true") {
      return {
        id: item.id,
        name: item.name,
      };
    }
  });

  return (
    <div className="checkout-planInfo">
      <h3 className="checkout-planInfoHeadline">Resumen de tu compra</h3>
      <SelectedPlan plan={plan} planBenefits={parsedBenefits} />
    </div>
  );
}
