import { formatCurrency } from "../../../utils/formatCurrency.js";
import QuantitySelector from "../../product/QuantitySelector/QuantitySelector.jsx";

export default function CartItem({ item, onUpdateQty, onRemove }) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-item-border">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md bg-headerMenu" />
      <div className="flex-1">
        <p className="text-sm text-title line-clamp-2">{item.name}</p>
        <p className="price text-sm mt-1">{formatCurrency(item.price)}</p>
      </div>
      <QuantitySelector qty={item.qty} onChange={(qty) => onUpdateQty(item.id, qty)} />
      <button
        onClick={() => onRemove(item.id)}
        className="text-meta hover:text-notif text-sm ml-2"
        aria-label="Hapus dari keranjang"
      >
        Hapus
      </button>
    </div>
  );
}

