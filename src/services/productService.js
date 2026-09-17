import products from "../data/products.js";
import categories from "../data/categories.js";

// Layer data — saat ini membaca mock data, tinggal diganti fetch(API_BASE_URL) nanti.
export function getAllProducts() {
  return Promise.resolve(products);
}

export function getProductBySlug(slug) {
  return Promise.resolve(products.find((p) => p.slug === slug) || null);
}

export function getProductsByCategory(categorySlug) {
  return Promise.resolve(products.filter((p) => p.category === categorySlug));
}

export function searchProducts(query) {
  const q = query.trim().toLowerCase();
  if (!q) return Promise.resolve([]);
  return Promise.resolve(
    products.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  );
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return Promise.resolve([]);
  return Promise.resolve(
    products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit)
  );
}

export function getAllCategories() {
  return Promise.resolve(categories);
}
