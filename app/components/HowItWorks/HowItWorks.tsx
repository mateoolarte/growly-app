import { Button } from "../Button";
import { Steps } from "./Steps";
import "./HowItWorks.scss";

export function HowItWorks(props) {
  const { title, description, cta, steps } = props;
  return (
    <section className="howItWorks">
      <div className="container-box">
        <h2 className="howItWorks-title">{title}</h2>
        <p className="howItWorks-description">{description}</p>
        <Steps data={steps} />
        {cta && (
          <div className="text-center">
            {cta?.title && <p className="hero-ctaTitle">{cta?.title}</p>}
            <Button className="hero-cta">{cta?.textBtn}</Button>
          </div>
        )}
      </div>
    </section>
  );
}
