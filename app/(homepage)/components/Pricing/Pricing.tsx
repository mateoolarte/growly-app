"use client";

import { useEffect, useState } from "react";

import { WarrantyPolicy } from "@/components/WarrantyPolicy";

import { getBenefitsData } from "@/services/getBenefitsData";

import { Tabs, TabContent } from "@/ui/Tabs";

import { Plans } from "./Plans";

import "./Pricing.scss";

export function Pricing(props) {
  const { title, description, tooltip, plans, enabled } = props;

  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    getBenefitsData()
      .then((data) => setBenefits(data))
      .catch(console.error);
  }, []);

  if (!enabled) return null;

  const options = [
    {
      id: 1,
      value: "one-payment",
      content: () => "Un solo pago",
    },
    {
      id: 2,
      value: "installments",
      content: () => "Pago a 3 cuotas",
    },
  ];

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

        <Tabs defaultTab="one-payment" tabs={options}>
          <TabContent value="one-payment">
            <Plans data={plans} tooltip={tooltip} benefits={benefits} />
          </TabContent>
          <TabContent value="installments">
            <Plans
              data={plans}
              withInstallments
              tooltip={tooltip}
              benefits={benefits}
            />
          </TabContent>
        </Tabs>

        <WarrantyPolicy />
      </div>
    </section>
  );
}
