import { CheckCircle } from "@/ui/icons/CheckCircle";

export function Benefits(props) {
  const { slug, data } = props;

  if (!data || data.length === 0) return null;

  const benefits = data?.filter((item) => {
    if (item.belongPlans[slug] === "true") {
      return {
        id: item.id,
        name: item.name,
      };
    }
  });

  return (
    <ul className="pricing-benefits">
      {benefits?.map((benefit) => (
        <li key={benefit.id} className="pricing-benefit">
          <CheckCircle className="pricing-benefitIcon" />
          {benefit.name}
        </li>
      ))}
    </ul>
  );
}
