import { ICONS_MAPPER } from "@/constants/iconMapper";

export function Step(props) {
  const { step, title, description, icon } = props;
  const Icon = ICONS_MAPPER[icon];
  return (
    <div className="howItWorks-step">
      <div className="howItWorks-stepContent">
        <div className="howItWorks-stepHeading">
          {icon && <Icon className="pricing-planBadge" />}
          <h3 className="howItWorks-stepTitle">{title}</h3>
        </div>
        <p className="howItWorks-stepDescription">{description}</p>
        <span className="howItWorks-stepNumber">{step}</span>
      </div>
    </div>
  );
}
