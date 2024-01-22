"use client";

import { useState } from "react";

import { ToggleInstallments } from "./ToggleInstallments";
import { Plans } from "./Plans";

import "./Pricing.scss";

export function Pricing(props) {
  const { title, description, plans } = props;
  const [withInstallments, setWithInstallments] = useState(false);

  return (
    <section className="pricing">
      <div className="container-box">
        <h2 className="pricing-title">{title}</h2>
        <p className="pricing-description">{description}</p>

        <ToggleInstallments
          withInstallments={withInstallments}
          setWithInstallments={setWithInstallments}
        />

        <Plans data={plans} withInstallments={withInstallments} />
      </div>
    </section>
  );
}
