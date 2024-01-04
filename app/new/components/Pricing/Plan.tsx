import classNames from "classnames";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/Button";
import { HIGHLIGHTED_PLAN, ICONS_MAPPER } from "@/new/constants";

import { Benefits } from "./Benefits";
import { getLocalPrice } from "@/new/utils/getLocalPrice";

export function Plan(props) {
  const {
    withInstallments,
    name,
    slug,
    price,
    priceMaintenance,
    priceInstallments,
  } = props;

  const [pricing, setPricing] = useState({
    price,
    priceMaintenance,
    priceInstallments,
    currency: "USD",
  });

  const Icon = ICONS_MAPPER[slug];
  const highlightedPlan = slug === HIGHLIGHTED_PLAN;

  const classNamesPlan = classNames("pricing-plan", `pricing-plan--${slug}`, {
    "pricing-plan--highlighted": highlightedPlan,
  });
  const btnStyle = highlightedPlan ? "secondary" : "primary";

  useEffect(() => {
    const pricingOptions = {
      price,
      priceMaintenance,
      priceInstallments,
      countryCode: "COP",
    };

    getLocalPrice(pricingOptions).then((res) => {
      setPricing({
        price: res?.price?.toLocaleString("es-CO"),
        priceMaintenance: res?.priceMaintenance?.toLocaleString("es-CO"),
        priceInstallments: res?.priceInstallments?.toLocaleString("es-CO"),
        currency: res.currency,
      });
    });
  }, [price, priceMaintenance, priceInstallments]);

  return (
    <div className={classNamesPlan}>
      <div className="pricing-planInfo">
        <h3 className="pricing-planName">
          {name}
          <Icon className="pricing-planBadge" />
        </h3>

        <p className="pricing-planPrice">
          <strong>
            ${withInstallments ? pricing?.priceInstallments : pricing?.price}
          </strong>
          {pricing?.currency}
        </p>

        <p className="pricing-planMaintenance">
          Luego ${pricing?.priceMaintenance} {pricing?.currency}/año
        </p>
      </div>

      <Benefits slug={slug} />

      <ButtonLink url="" style={btnStyle} className="pricing-planCta">
        Contratar {name}
      </ButtonLink>
    </div>
  );
}
