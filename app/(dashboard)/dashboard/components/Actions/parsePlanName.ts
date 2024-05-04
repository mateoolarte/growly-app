import { capitalizeText } from "@/utils/capitalizeText";

export function parsePlanName(name, installments) {
  if (installments === "3") return `Plan ${capitalizeText(name)} a 3 cuotas`;
  if (installments === "1") return `Plan ${capitalizeText(name)}`;

  return "";
}
