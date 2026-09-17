import { formatCurrency } from "../../../utils/formatCurrency.js";

export default function OrderSummary({ items, shippingCost, total }) {
  return (
    <div className="border border-item-border rounded-md p-4">
      <p className="font-semibold text-title mb-2">Daftar Produk Pesanan</p>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between text-sm py-1">
          <span className="text-title">{item.name} x{item.qty}</span>
          <span className="text-meta">{formatCurrency(item.price * item.qty)}</span>
        </div>
      ))}
      <div className="flex justify-between text-sm py-1 border-t border-item-border mt-2 pt-2">
        <span className="text-meta">Ongkos Kirim</span>
        <span className="text-title">{formatCurrency(shippingCost)}</span>
      </div>
      <div className="flex justify-between text-base font-semibold mt-1">
        <span>Total</span>
        <span className="price">{formatCurrency(total)}</span>
      </div>
    </div>
  );
}

