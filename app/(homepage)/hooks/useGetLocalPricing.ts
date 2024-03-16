import { useState, useEffect } from "react";

import { getLocalPrice } from "@/services/getLocalPrice";

export function useGetLocalPricing(data) {
  const { price, priceMaintenance, priceInstallments } = data;

  const [pricing, setPricing] = useState({
    price,
    priceMaintenance,
    priceInstallments,
    currency: "USD",
  });

  useEffect(() => {
    const pricingOptions = {
      price,
      priceMaintenance,
      priceInstallments,
      countryCode: "COP",
    };

    getLocalPrice(pricingOptions).then((res) => {
      setPricing({
        price: res?.price?.toLocaleString("es-CO"),
        priceMaintenance: res?.priceMaintenance?.toLocaleString("es-CO"),
        priceInstallments: res?.priceInstallments?.toLocaleString("es-CO"),
        currency: res.currency,
      });
    });
  }, [price, priceMaintenance, priceInstallments]);

  return pricing;
}
