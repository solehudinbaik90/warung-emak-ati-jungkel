import { useCart } from "../hooks/useCart.js";
import CartItem from "../components/cart/CartItem/CartItem.jsx";
import CartSummary from "../components/cart/CartSummary/CartSummary.jsx";

export default function CartPage() {
  const { items, updateQty, removeItem, totalPrice } = useCart();

  return (
    <div>
      <h1 className="text-lg font-bold text-title mb-3">Keranjang Belanja</h1>
      {items.length === 0 ? (
        <p className="text-meta text-sm">Keranjang masih kosong. Yuk mulai belanja!</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {items.map((item) => (
              <CartItem key={item.id} item={item} onUpdateQty={updateQty} onRemove={removeItem} />
            ))}
          </div>
          <div>
            <CartSummary totalPrice={totalPrice} />
          </div>
        </div>
      )}
    </div>
  );
}
