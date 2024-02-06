import { getBenefitsData } from "@/services/getBenefitsData";
import { Plan } from "./Plan";

export async function Plans(props) {
  const { data, withInstallments } = props;

  const benefits = await getBenefitsData();

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
