import classNames from "classnames";

import { ButtonLink } from "@/ui/Button";
import { ICONS_MAPPER } from "@/constants/iconMapper";
import { HIGHLIGHTED_PLAN } from "@/constants";

import { Benefits } from "./Benefits";

export function Plan(props) {
  const {
    withInstallments,
    name,
    slug,
    benefits,
    priceMaintenance,
    priceInstallments,
  } = props;

  const pricing = {
    price: props.price?.toLocaleString("es-CO"),
    priceNum: props.price,
    priceMaintenance: priceMaintenance?.toLocaleString("es-CO"),
    priceMaintenanceNum: priceMaintenance,
    priceInstallments: priceInstallments?.toLocaleString("es-CO"),
    priceInstallmentsNum: priceInstallments,
    currency: "COP",
  };

  const Icon = ICONS_MAPPER[slug];
  const highlightedPlan = slug === HIGHLIGHTED_PLAN;

  const classNamesPlan = classNames("pricing-plan", `pricing-plan--${slug}`, {
    "pricing-plan--highlighted": highlightedPlan,
  });
  const btnStyle = highlightedPlan ? "secondary" : "primary";
  const price = withInstallments ? pricing?.priceInstallments : pricing?.price;
  const installmentsLabel = withInstallments ? "3 cuotas de:" : "";
  const url = `/checkout/${slug}${withInstallments ? "?type=installments" : ""}`;

  return (
    <div className={classNamesPlan}>
      <div className="pricing-planInfo">
        <h3 className="pricing-planName">
          {name}
          <Icon className="pricing-planBadge" />
        </h3>

        {installmentsLabel && (
          <p className="pricing-planLabel">{installmentsLabel}</p>
        )}

        <p className="pricing-planPrice">
          <strong>${price}</strong>
          {pricing?.currency}
        </p>

        <p className="pricing-planLabel">
          Luego ${pricing?.priceMaintenance} {pricing?.currency}/año
        </p>
      </div>

      <Benefits data={benefits} slug={slug} />

      <ButtonLink href={url} style={btnStyle} className="pricing-planCta">
        Contratar {name}
      </ButtonLink>
    </div>
  );
}
