export function Plans(props) {
  const { data, withInstallments } = props;

  return (
    <ul className="pricing-plans">
      {data?.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
}
