import { CheckCircle } from "@/assets/icons/CheckCircle";
import { getBenefitsData } from "@/new/utils/getBenefitsData";
import { useEffect, useState } from "react";

export function Benefits(props) {
  const { slug } = props;

  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    getBenefitsData(slug).then((data) => {
      setBenefits(data);
    });
  }, [slug]);

  return (
    <ul className="pricing-benefits">
      {benefits.map((benefit) => (
        <li key={benefit.id} className="pricing-benefit">
          <CheckCircle className="pricing-benefitIcon" />
          {benefit.name}
        </li>
      ))}
    </ul>
  );
}
