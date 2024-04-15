"use client";

import { Button } from "@/ui/Button";
import { ArrowCircleRight } from "@/ui/icons/ArrowCircleRight";

import { scrollToSection } from "@/utils/scrollToSection";

import "./Cta.scss";

export function Cta(props) {
  const { title, description, cta } = props;

  return (
    <section className="cta">
      <div className="container-box">
        <div className="cta-info">
          <h2
            className="cta-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className="cta-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {cta && (
            <Button
              className="cta-btn"
              onClick={() => scrollToSection(cta?.linkBtn)}
            >
              {cta?.textBtn}
              <ArrowCircleRight />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
