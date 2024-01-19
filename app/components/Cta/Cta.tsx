import { Button } from "@/ui/Button";
import "./Cta.scss";

export function Cta(props) {
  const { title, description, cta } = props;

  return (
    <section className="cta">
      <div className="container-box">
        <div className="cta-info">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-description">{description}</p>
          {cta && <Button className="cta-btn">{cta?.textBtn}</Button>}
        </div>
      </div>
    </section>
  );
}
