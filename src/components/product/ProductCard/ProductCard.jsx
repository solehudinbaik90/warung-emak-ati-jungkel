import { Link } from "react-router-dom";
import { formatCurrency } from "../../../utils/formatCurrency.js";
import { priceAfterDiscount } from "../../../utils/parsePrice.js";

export default function ProductCard({ product }) {
  const finalPrice = priceAfterDiscount(product.price, product.discountPercent);

  return (
    <Link
      to={`/produk/${product.slug}`}
      className="block bg-white border border-item-border rounded-md overflow-hidden hover:shadow-card transition-shadow"
    >
      <div className="relative aspect-square bg-headerMenu">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
        {product.discountPercent > 0 && (
          <span className="absolute top-1.5 left-1.5 bg-[var(--label-background)] text-white text-[11px] px-1.5 py-0.5 rounded">
            -{product.discountPercent}%
          </span>
        )}
      </div>
      <div className="p-2">
        <h3 className="text-sm text-title line-clamp-2 min-h-[2.5em]">{product.name}</h3>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="price text-sm">{formatCurrency(finalPrice)}</span>
          {product.discountPercent > 0 && (
            <span className="text-xs text-meta line-through">{formatCurrency(product.price)}</span>
          )}
        </div>
        <div className="flex items-center gap-1 mt-1 text-xs text-meta">
          <span>⭐ {product.rating}</span>
          <span>· {product.seller}</span>
        </div>
      </div>
    </Link>
  );
}
