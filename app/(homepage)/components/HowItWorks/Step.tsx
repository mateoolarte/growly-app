import { ICONS_MAPPER } from "@/constants/iconMapper";

export function Step(props) {
  const { step, title, description, icon } = props;
  const Icon = ICONS_MAPPER[icon];

  return (
    <div className="howItWorks-step">
      <div className="howItWorks-stepContent">
        <div className="howItWorks-stepHeading">
          {icon && <Icon className="howItWorks-stepBadge" />}
          <h3
            className="howItWorks-stepTitle"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        <p
          className="howItWorks-stepDescription"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <span className="howItWorks-stepNumber">{step}</span>
      </div>
    </div>
  );
}
