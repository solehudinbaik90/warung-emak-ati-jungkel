import ProductCard from "../ProductCard/ProductCard.jsx";

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return <p className="text-meta text-sm py-6 text-center">Belum ada produk di kategori ini.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

