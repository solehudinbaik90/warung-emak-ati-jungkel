import { CURRENCY } from "./constants.js";

export function formatCurrency(value, currency = CURRENCY) {
  const number = Number(value) || 0;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
}
