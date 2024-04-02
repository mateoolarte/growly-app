"use client";

import { useRouter } from "next/navigation";

import { ICONS_MAPPER } from "@/constants/iconMapper";
import { ArrowsClockwise } from "@/assets/icons/ArrowsClockwise";
import { PLANS } from "@/constants/plans";

import { Accordion } from "@/ui/Accordion";

import styles from "./SelectedPlan.module.scss";

export function SelectedPlan(props) {
  const { plan, planBenefits, type } = props;
  const { name, slug, price, priceMaintenance, priceInstallments } = plan;
  const Icon = ICONS_MAPPER[slug];
  const router = useRouter();

  const pricing = {
    price: price?.toLocaleString("es-CO"),
    priceMaintenance: priceMaintenance?.toLocaleString("es-CO"),
    priceInstallments: priceInstallments?.toLocaleString("es-CO"),
    currency: "COP",
  };
  const getPrice =
    type === "installments" ? pricing?.priceInstallments : pricing?.price;

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
    <div className={styles.selectedPlan}>
      <div className={styles["selectedPlan-info"]}>
        <div className={styles["selectedPlan-title"]}>
          <Icon className={styles["selectedPlan-icon"]} />
          <h2 className={styles["selectedPlan-name"]}>Plan {name}</h2>
        </div>

        <div className={styles["selectedPlan-buttonContainer"]}>
          <select
            name="pets"
            id="pet-select"
            className={styles["selectedPlan-button"]}
            onChange={handleChangePlan}
          >
            <option value="">cambiar</option>
            {PLANS_TO_SELECT.map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
          <ArrowsClockwise className={styles["selectedPlan-button--icon"]} />
        </div>
      </div>

      <div className={styles["selectedPlan-priceContainer"]}>
        <p className={styles["selectedPlan-price"]}>
          ${getPrice} {pricing?.currency}
        </p>

        <p className={styles["selectedPlan-priceMaintenance"]}>
          Luego de un año el valor de renovación será de $
          {pricing?.priceMaintenance} {pricing?.currency}
        </p>

        <Accordion
          data={mobileBenefits}
          collapsed
          className={styles["selectedPlan-benefits--mobile"]}
        />

        <div className={styles["selectedPlan-benefits--desktop"]}>
          <p className={styles["selectedPlan-benefitsTitle"]}>
            Tu plan incluye:
          </p>
          <BenefitList data={planBenefits} styles={styles} />
        </div>
      </div>
    </div>
  );
}

function BenefitList(props) {
  const { data, styles } = props;

  return (
    <ul className={styles["selectedPlan-benefitList"]}>
      {data.map((benefit) => (
        <li key={benefit.id} className={styles["selectedPlan-benefit"]}>
          {benefit.name}
        </li>
      ))}
    </ul>
  );
}
