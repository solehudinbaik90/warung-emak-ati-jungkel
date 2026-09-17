import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce.js";
import { searchProducts } from "../services/productService.js";
import ProductGrid from "../components/product/ProductGrid/ProductGrid.jsx";
import LoadingSpinner from "../components/common/LoadingSpinner/LoadingSpinner.jsx";

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const initialQuery = params.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(query, 300);
  const [results, setResults] = useState(null);

  useEffect(() => {
    setParams(debouncedQuery ? { q: debouncedQuery } : {});
    if (!debouncedQuery) {
      setResults([]);
      return;
    }
    searchProducts(debouncedQuery).then(setResults);
  }, [debouncedQuery]);

  return (
    <div>
      <input
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari produk..."
        className="w-full border border-item-border rounded-md px-3 py-2 mb-4"
      />
      {results === null ? <LoadingSpinner /> : <ProductGrid products={results} />}
    </div>
  );
}
