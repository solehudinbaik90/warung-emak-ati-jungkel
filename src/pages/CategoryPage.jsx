import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../services/productService.js";
import ProductGrid from "../components/product/ProductGrid/ProductGrid.jsx";
import LoadingSpinner from "../components/common/LoadingSpinner/LoadingSpinner.jsx";
import categories from "../data/categories.js";

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState(null);
  const category = categories.find((c) => c.id === categorySlug);

  useEffect(() => {
    setProducts(null);
    getProductsByCategory(categorySlug).then(setProducts);
  }, [categorySlug]);

  return (
    <div>
      <h1 className="text-lg font-bold text-title mb-3">
        {category ? \`\${category.icon} \${category.name}\` : "Kategori"}
      </h1>
      {products === null ? <LoadingSpinner /> : <ProductGrid products={products} />}
    </div>
  );
}
