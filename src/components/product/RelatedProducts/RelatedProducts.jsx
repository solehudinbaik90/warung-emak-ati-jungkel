import { useEffect, useState } from "react";
import { getRelatedProducts } from "../../../services/productService.js";
import ProductGrid from "../ProductGrid/ProductGrid.jsx";

export default function RelatedProducts({ product }) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (product) getRelatedProducts(product).then(setRelated);
  }, [product]);

  if (related.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold text-title mb-3">Produk Terkait</h2>
      <ProductGrid products={related} />
    </section>
  );
}

