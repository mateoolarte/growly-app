import { Feature } from "./Feature";

import "./Features.scss";

export function Features(props) {
  const { title, description, features } = props;

  return (
    <section className="features" id="caracteristicas">
      <div className="container-box">
        <div className="features-info">
          <h2 className="features-title">{title}</h2>
          <p className="features-description">{description}</p>
        </div>
        <ul className="features-list">
          {features.map((feature) => {
            return (
              <Feature
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
