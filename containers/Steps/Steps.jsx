// components
import { StepItem } from "../../components/StepItem";

// styles
import { Wrapper } from "./styled";

export function Steps({ steps }) {
  return (
    <Wrapper>
      {steps.map((step, index) => (
        <StepItem key={step.id} {...step} isReverse={index % 2 !== 0} />
      ))}
    </Wrapper>
  );
}
