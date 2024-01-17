import { Button } from "../Button";
import { Steps } from "./Steps";
import "./HowItWorks.scss";

export function HowItWorks(props) {
  const { title, description, cta, steps } = props
  return (
    <section className="how_it_works">
      <div className="container-box">
        <h2 className="how_it_works-title" >{title}</h2>
        <p className="how_it_works-description">{description}</p>
        <Steps data={steps} />
        {cta && (
          <>
            {cta?.title && <p className="hero-ctaTitle">{cta?.title}</p>}
            <Button className="hero-cta">{cta?.textBtn}</Button>
          </>
        )}
      </div>
    </section>
  );
}
