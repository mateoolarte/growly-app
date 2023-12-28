import { ICONS_MAPPER } from "@/new/constants";
import "./Feature.scss";

export function Feature(props) {
  const { title, description, icon } = props;
  const Icon = ICONS_MAPPER[icon];

  return (
    <div className="feature">
      {Icon && <Icon className="feature-icon" />}

      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}
