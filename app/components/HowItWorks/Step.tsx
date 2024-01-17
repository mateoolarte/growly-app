import { ICONS_MAPPER } from "@/constants/iconMapper";

export function Step(props) {
  const { step, title, description, icon } = props
  const Icon = ICONS_MAPPER[icon];
  return (
    <div className="how_it_works-step">
      <div className="how_it_works-stepContent">
        <div className="how_it_works-stepHeading">
          {icon && <Icon className="pricing-planBadge" />}
          <h3>{title}</h3>
        </div>
        <p className="how_it_works-stepDescription">{description}</p>
        <span className="how_it_works-stepNumber">{step}</span>
      </div>

    </div>
  );
}
