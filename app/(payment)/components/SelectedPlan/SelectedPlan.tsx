'use client'
import { ICONS_MAPPER } from "@/constants/iconMapper";
import { ArrowsClockwise } from "@/assets/icons/ArrowsClockwise";
import { useRouter } from "next/navigation";
import { PLANS } from "@/constants/plans";
import './SelectedPlan.scss';

export function SelectedPlan({ plan, planBenefits }) {
  const { name, price, priceMaintenance, slug } = plan;
  const Icon = ICONS_MAPPER[slug];
  const router = useRouter();

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3
  }).format(price);

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
        <p className="selectedPlan-price">{formattedPrice} USD</p>
        <p className="selectedPlan-priceMaintenance">Luego de un año el valor de renovación será de ${priceMaintenance} USD</p>
        <p className="selectedPlan-benefitsTitle">Tu plan incluye:</p>
        {planBenefits.map(benefit => (
          <p key={benefit.id} className="selectedPlan-benefits">
            {benefit.name}
          </p>
        ))}
      </div>
    </div>
  )
}
