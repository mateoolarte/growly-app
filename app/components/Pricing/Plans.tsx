import { useEffect, useState } from "react";

import { getBenefitsData } from "@/services/getBenefitsData";
import { Plan } from "./Plan";

export function Plans(props) {
  const { data, withInstallments } = props;

  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    getBenefitsData()
      .then((res) => setBenefits(res))
      .catch((err) => console.error(err));
  }, [])

  return (
    <div className="pricing-plans">
      {data?.map((item) => {
        return (
          <Plan
            key={item.id}
            {...item}
            withInstallments={withInstallments}
            benefits={benefits}
          />
        );
      })}
    </div>
  );
}
