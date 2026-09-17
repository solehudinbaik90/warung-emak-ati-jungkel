import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart harus dipakai di dalam <CartProvider>");
  return ctx;
}
