import { Plan } from "./Plan";

export function Plans(props) {
  const { data, withInstallments } = props;

  return (
    <div className="pricing-plans">
      {data?.map((item) => {
        return (
          <Plan key={item.id} {...item} withInstallments={withInstallments} />
        );
      })}
    </div>
  );
}
