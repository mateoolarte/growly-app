import { Button } from "../Button";
import { Steps } from "./Steps";
import "./HowItWorks.scss";

export function HowItWorks(props) {
  const { title, description, cta, steps } = props
  return (
    <div>
      <h2 >{title}</h2>
      <p>{description}</p>
      <Steps data={steps} />
      {cta && (
        <>
          {cta?.title && <p className="hero-ctaTitle">{cta?.title}</p>}
          <Button className="hero-cta">{cta?.textBtn}</Button>
        </>
      )}
    </div>
  );
}
