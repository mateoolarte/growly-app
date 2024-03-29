import { Feature } from "./Feature";

import "./Features.scss";

export function Features(props) {
  const { title, description, features } = props;

  return (
    <section className="features" id="caracteristicas">
      <div className="container-box">
        <div className="features-info">
          <h2
            className="features-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className="features-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
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
