import { Step } from "./Step";

export function Steps(props) {
  const { data } = props;

  return (
    <div className="howItWorks-steps">
      {data?.map((step, index) => {
        return <Step key={step.id} step={index + 1} {...step} />;
      })}
    </div>
  );
}
