import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE, STORE_NAME } from "../utils/constants.js";
import { formatCurrency } from "../utils/formatCurrency.js";

export function buildOrderMessage({ items, customer, shippingRegion, shippingCost, total }) {
  const lines = [];
  lines.push(WHATSAPP_DEFAULT_MESSAGE + `, saya ${customer?.name || ""}`.trim());
  lines.push("");
  lines.push("Daftar Produk Pesanan:");
  items.forEach((item, idx) => {
    lines.push(`${idx + 1}. ${item.name} x${item.qty} — ${formatCurrency(item.price * item.qty)}`);
  });
  lines.push("");
  if (shippingRegion) {
    lines.push(`Wilayah pengiriman: ${shippingRegion}`);
    lines.push(`Ongkos kirim: ${formatCurrency(shippingCost || 0)}`);
  }
  lines.push(`Total: ${formatCurrency(total)}`);
  if (customer?.phone) lines.push(`Nomor telepon: ${customer.phone}`);
  if (customer?.postcode) lines.push(`Kode pos: ${customer.postcode}`);
  lines.push("");
  lines.push(`Terima kasih — ${STORE_NAME}`);
  return lines.join("\n");
}

export function buildWhatsappLink(message, number = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
