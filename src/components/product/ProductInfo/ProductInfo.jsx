import { formatCurrency } from "../../../utils/formatCurrency.js";
import { priceAfterDiscount } from "../../../utils/parsePrice.js";

export default function ProductInfo({ product }) {
  const finalPrice = priceAfterDiscount(product.price, product.discountPercent);
  return (
    <div>
      <h1 className="text-xl font-bold text-title">{product.name}</h1>
      <div className="flex items-center gap-2 mt-2 text-sm text-meta">
        <span>⭐ {product.rating}</span>
        <span>· Terjual oleh {product.seller}</span>
      </div>
      <div className="mt-3 flex items-baseline gap-3">
        <span className="price text-2xl">{formatCurrency(finalPrice)}</span>
        {product.discountPercent > 0 && (
          <>
            <span className="text-meta line-through">{formatCurrency(product.price)}</span>
            <span className="bg-[var(--label-background)] text-white text-xs px-1.5 py-0.5 rounded">
              -{product.discountPercent}%
            </span>
          </>
        )}
      </div>
      <p className="mt-4 text-sm text-title leading-relaxed">{product.description}</p>
    </div>
  );
}

