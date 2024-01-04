import { CURRENCY_CONVERT_API } from "../constants";

export async function getLocalPrice(options) {
  const { price, priceMaintenance, priceInstallments, countryCode } = options;

  try {
    const res = await fetch(CURRENCY_CONVERT_API);
    const json = await res.json();
    const rates = json?.rates;

    const currentValue = parseInt(rates[countryCode]);
    const regularPrice = price * currentValue;
    const maintenancePrice = priceMaintenance * currentValue;
    const installmentPrice = priceInstallments * currentValue;

    return {
      price: regularPrice,
      priceMaintenance: maintenancePrice,
      priceInstallments: installmentPrice,
      currency: countryCode,
    };
  } catch (error) {
    return {
      price,
      priceMaintenance,
      priceInstallments,
      currency: "USD",
    };
  }
}
