'use client'

import { ICONS_MAPPER } from "@/constants/iconMapper";
import { ArrowsClockwise } from "@/assets/icons/ArrowsClockwise";
import './SelectedPlan.scss';
import { useRouter } from "next/navigation";
import { PLANS } from "@/constants/plans";

export function SelectedPlan({ plan }) {
  const { name, price, priceMaintenance, slug } = plan;
  const Icon = ICONS_MAPPER[slug];
  const router = useRouter();

  const PLANS_TO_SELECT = PLANS.filter(planName => planName !== slug);

  const handleChangePlan = (e) => {
    const value = e.target.value;
    router.push(value)
  }

  return (
    <div className="selectedPlan">
      <div className="selectedPlan-infoContainer">
        <div className="selectedPlan-titleContainer">
          <Icon className="selectedPlan-icon" />
          <h2 className="selectedPlan-name" >
            Plan {name}
          </h2>
        </div>
        <div className="selectedPlan-buttonContainer">
          <select name="pets" id="pet-select" className="selectedPlan-button" onChange={handleChangePlan}>
            <option value="">
              <div>
                cambiar
              </div>
            </option>
            {PLANS_TO_SELECT.map(plan => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}

          </select>
          <ArrowsClockwise className="selectedPlan-button--icon" />
        </div>
      </div>
      <div className="selectedPlan-priceContainer">
        <p className="selectedPlan-price">${price} USD</p>
        <p className="selectedPlan-priceMaintenance">Luego de un año el valor de renovación será de ${priceMaintenance} USD</p>
        <p className="selectedPlan-benefits">Tu plan incluye:</p>
      </div>

    </div>
  )
}
