export function parsePrice(raw) {
  if (!raw || typeof raw !== "string") {
    return { price: 0, discountPercent: 0, label: null };
  }

  const priceMatch = raw.match(/Rp\s?([\d.,]+)/i);
  const discountMatch = raw.match(/-(\d+)%/);
  const labelMatch = raw.match(/#(\w+)/);

  const price = priceMatch ? Number(priceMatch[1].replace(/[.,]/g, "")) : 0;
  const discountPercent = discountMatch ? Number(discountMatch[1]) : 0;
  const label = labelMatch ? labelMatch[1] : null;

  return { price, discountPercent, label };
}

export function priceAfterDiscount(price, discountPercent) {
  if (!discountPercent) return price;
  return Math.round(price - (price * discountPercent) / 100);
}
