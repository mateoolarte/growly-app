import { ICONS_MAPPER } from "@/constants/iconMapper";

export function Step(props) {
  const { step, title, description, icon } = props
  const Icon = ICONS_MAPPER[icon];
  return (
    <div>
      {icon && <Icon className="pricing-planBadge" />}
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{step}</span>
    </div>
  );
}
