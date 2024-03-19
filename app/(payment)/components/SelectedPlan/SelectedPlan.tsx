"use client";

import { useRouter } from "next/navigation";

import { ICONS_MAPPER } from "@/constants/iconMapper";
import { ArrowsClockwise } from "@/assets/icons/ArrowsClockwise";
import { PLANS } from "@/constants/plans";

import "./SelectedPlan.scss";
import { Accordion } from "@/ui/Accordion";

export function SelectedPlan({ plan, planBenefits }) {
  const { name, slug, price, priceMaintenance, priceInstallments } = plan;
  const Icon = ICONS_MAPPER[slug];
  const router = useRouter();

  const pricing = {
    price: price?.toLocaleString("es-CO"),
    priceNum: price,
    priceMaintenance: priceMaintenance?.toLocaleString("es-CO"),
    priceMaintenanceNum: priceMaintenance,
    priceInstallments: priceInstallments?.toLocaleString("es-CO"),
    priceInstallmentsNum: priceInstallments,
    currency: "COP",
  };

  const PLANS_TO_SELECT = PLANS.filter((planName) => planName !== slug);
  const mobileBenefits = [
    {
      id: 1,
      title: "Tu plan incluye",
      content: <BenefitList data={planBenefits} />,
    },
  ];

  const handleChangePlan = (e) => {
    const value = e.target.value;
    router.push(value);
  };

  return (
    <div className="selectedPlan">
      <div className="selectedPlan-infoContainer">
        <div className="selectedPlan-titleContainer">
          <Icon className="selectedPlan-icon" />
          <h2 className="selectedPlan-name">Plan {name}</h2>
        </div>

        <div className="selectedPlan-buttonContainer">
          <select
            name="pets"
            id="pet-select"
            className="selectedPlan-button"
            onChange={handleChangePlan}
          >
            <option value="">cambiar</option>
            {PLANS_TO_SELECT.map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
          <ArrowsClockwise className="selectedPlan-button--icon" />
        </div>
      </div>

      <div className="selectedPlan-priceContainer">
        <p className="selectedPlan-price">
          ${pricing?.price} {pricing?.currency}
        </p>

        <p className="selectedPlan-priceMaintenance">
          Luego de un año el valor de renovación será de $
          {pricing?.priceMaintenance} {pricing?.currency}
        </p>

        <Accordion
          data={mobileBenefits}
          collapsed
          className="selectedPlan-benefits--mobile"
        />

        <div className="selectedPlan-benefits--desktop">
          <p className="selectedPlan-benefitsTitle">Tu plan incluye:</p>
          <BenefitList data={planBenefits} />
        </div>
      </div>
    </div>
  );
}

function BenefitList(props) {
  const { data } = props;

  return (
    <ul className="selectedPlan-benefitList">
      {data.map((benefit) => (
        <li key={benefit.id} className="selectedPlan-benefit">
          {benefit.name}
        </li>
      ))}
    </ul>
  );
}
