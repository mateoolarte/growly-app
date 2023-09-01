import { Info } from "./Info";
import { Asset } from "./Asset";
import { Features } from "./Features";

import "./Hero.scss";

export function Hero() {
  return (
    <section className="hero">
      <div className="container-box">
        <div className="hero-container">
          <Info />
          <Asset />
        </div>
        <Features />
      </div>
    </section>
  );
}
