"use client";

import { scrollToSection } from "@/utils/scrollToSection";

import { Button } from "@/ui/Button";
import { ArrowCircleRight } from "@/ui/icons/ArrowCircleRight";

import { Steps } from "./Steps";

import "./HowItWorks.scss";

export function HowItWorks(props) {
  const { title, description, cta, steps } = props;

  return (
    <section className="howItWorks" id="como-funciona">
      <div className="container-box">
        <h2
          className="howItWorks-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="howItWorks-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <Steps data={steps} />

        {cta && (
          <div className="text-center">
            {cta?.title && <p className="hero-ctaTitle">{cta?.title}</p>}
            <Button
              className="hero-cta"
              onClick={() => scrollToSection(cta?.linkBtn)}
            >
              {cta?.textBtn}
              <ArrowCircleRight />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
