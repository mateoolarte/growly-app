
import { ICONS_MAPPER } from "@/constants/iconMapper";
import './SelectedPlan.scss';
import { ArrowsClockwise } from "@/assets/icons/ArrowsClockwise";

export function SelectedPlan({ plan }) {
  const { name, price, priceMaintenance, slug } = plan;
  const Icon = ICONS_MAPPER[slug];
  return (
    <div className="selectedPlan">
      <div className="selectedPlan-infoContainer">
        <div className="selectedPlan-titleContainer">
          <Icon className="selectedPlan-icon" />
          <h2 className="selectedPlan-name" >
            Plan {name}
          </h2>
        </div>

        <button className="selectedPlan-button">
          cambiar
          <ArrowsClockwise className={''} />
        </button>
      </div>
      <div className="selectedPlan-priceContainer">
        <p className="selectedPlan-price">${price} USD</p>
        <p className="selectedPlan-priceMaintenance">Luego de un año el valor de renovación será de ${priceMaintenance} USD</p>
        <p className="selectedPlan-benefits">Tu plan incluye:</p>
      </div>

    </div>
  )
}
