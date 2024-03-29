"use client";

import { useState } from "react";

import { ToggleInstallments } from "./ToggleInstallments";
import { Plans } from "./Plans";

import "./Pricing.scss";

export function Pricing(props) {
  const { title, description, plans } = props;
  const [withInstallments, setWithInstallments] = useState(false);

  return (
    <section className="pricing" id="precios">
      <div className="container-box">
        <h2
          className="pricing-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="pricing-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <ToggleInstallments
          withInstallments={withInstallments}
          setWithInstallments={setWithInstallments}
        />

        <Plans data={plans} withInstallments={withInstallments} />
      </div>
    </section>
  );
}
