const STORAGE_KEY = "blogpedia_cart";

export function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCart(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function clearCartStorage() {
  localStorage.removeItem(STORAGE_KEY);
}
