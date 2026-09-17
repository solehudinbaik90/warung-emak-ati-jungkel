import { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/productService.js";
import ProductGrid from "../../product/ProductGrid/ProductGrid.jsx";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner.jsx";

export default function ProductSection({ title = "Produk Populer", limit, showDiscountedOnly = false }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getAllProducts().then((data) => {
      let result = data;
      if (showDiscountedOnly) result = result.filter((p) => p.discountPercent > 0);
      if (limit) result = result.slice(0, limit);
      setProducts(result);
    });
  }, [limit, showDiscountedOnly]);

  if (!products) return <LoadingSpinner />;

  return (
    <section className="my-6">
      {title && <h2 className="text-lg font-bold text-title mb-3">{title}</h2>}
      <ProductGrid products={products} />
    </section>
  );
}

