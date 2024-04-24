export function parsePlanName(name, installments) {
  if (name === "landing" && installments === "3")
    return "Plan Landing a 3 cuotas";

  if (name === "landing" && installments === "1") return "Plan Landing";

  if (name === "corporate" && installments === "3")
    return "Plan Corporate a 3 cuotas";

  if (name === "corporate" && installments === "1") return "Plan Corporate";

  if (name === "ecommerce" && installments === "3")
    return "Plan Ecommerce a 3 cuotas";

  if (name === "ecommerce" && installments === "1") return "Plan Ecommerce";

  return "";
}
