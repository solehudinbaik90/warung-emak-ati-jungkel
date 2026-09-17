import CartItem from "../CartItem/CartItem.jsx";
import CartSummary from "../CartSummary/CartSummary.jsx";
import { useCart } from "../../../hooks/useCart.js";
import { useAppContext } from "../../../context/AppContext.jsx";

export default function CartDrawer() {
  const { items, updateQty, removeItem, totalPrice } = useCart();
  const { cartDrawerOpen, setCartDrawerOpen } = useAppContext();

  if (!cartDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40" onClick={() => setCartDrawerOpen(false)}>
      <div className="bg-white w-full max-w-sm h-full p-4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-title">Keranjang Belanja</h3>
          <button onClick={() => setCartDrawerOpen(false)} aria-label="Tutup">✕</button>
        </div>
        {items.length === 0 ? (
          <p className="text-meta text-sm">Keranjang masih kosong.</p>
        ) : (
          <>
            {items.map((item) => (
              <CartItem key={item.id} item={item} onUpdateQty={updateQty} onRemove={removeItem} />
            ))}
            <div className="mt-4">
              <CartSummary totalPrice={totalPrice} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

