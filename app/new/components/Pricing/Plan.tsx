import { ButtonLink } from "@/components/Button";
import { Benefits } from "./Benefits";
import { HIGHLIGHTED_PLAN, ICONS_MAPPER } from "@/new/constants";
import classNames from "classnames";

export function Plan(props) {
  const { withInstallments, name, slug, price, priceMaintenance } = props;
  const Icon = ICONS_MAPPER[slug];
  const highlightedPlan = slug === HIGHLIGHTED_PLAN;
  const classNamesPlan = classNames("pricing-plan", `pricing-plan--${slug}`, {
    "pricing-plan--highlighted": highlightedPlan,
  });
  const btnStyle = highlightedPlan ? "secondary" : "primary";

  return (
    <div className={classNamesPlan}>
      <div className="pricing-planInfo">
        <h3 className="pricing-planName">
          {name}
          <Icon className="pricing-planBadge" />
        </h3>

        <p className="pricing-planPrice">
          <strong>${price}</strong>
          USD
        </p>

        <p className="pricing-planMaintenance">
          Luego ${priceMaintenance} USD/año
        </p>
      </div>

      <Benefits />

      <ButtonLink url="" style={btnStyle} className="pricing-planCta">
        Contratar {name}
      </ButtonLink>
    </div>
  );
}
