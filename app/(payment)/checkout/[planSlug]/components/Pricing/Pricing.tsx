import styles from "./Pricing.module.scss";

export function Pricing(props) {
  const { plan, type } = props;

  const { price, priceMaintenance, priceInstallments } = plan;

  const pricing = {
    price: price?.toLocaleString("es-CO"),
    priceMaintenance: priceMaintenance?.toLocaleString("es-CO"),
    priceInstallments: priceInstallments?.toLocaleString("es-CO"),
    currency: "COP",
  };
  const getPrice =
    type === "installments" ? pricing?.priceInstallments : pricing?.price;

  return (
    <div className={styles["pricing"]}>
      <p className={styles["pricing-price"]}>
        {type ? "3 cuotas de " : ""} ${getPrice} {pricing?.currency}
      </p>

      {type && (
        <p className={styles["pricing-text"]}>
          Las cuotas restantes (2) serán debitadas mensual y automáticamente de
          tu tarjeta de crédito.
        </p>
      )}

      <p className={styles["pricing-maintenance"]}>
        Luego de un año el valor de renovación será solo por los costos técnicos
        y de mantenimiento por valor de{" "}
        <strong>
          ${pricing?.priceMaintenance} {pricing?.currency}
        </strong>
        .
      </p>
    </div>
  );
}
