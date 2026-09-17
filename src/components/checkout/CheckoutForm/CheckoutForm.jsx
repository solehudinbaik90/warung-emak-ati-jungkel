import { useState } from "react";
import ShippingSelector from "../ShippingSelector/ShippingSelector.jsx";
import PaymentMethod from "../PaymentMethod/PaymentMethod.jsx";
import OrderSummary from "../OrderSummary/OrderSummary.jsx";
import Button from "../../common/Button/Button.jsx";
import shippingRegions from "../../../data/shipping.js";
import { useCart } from "../../../hooks/useCart.js";
import { buildOrderMessage, buildWhatsappLink } from "../../../services/whatsappService.js";

export default function CheckoutForm() {
  const { items, totalPrice, clearCart } = useCart();
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "", postcode: "" });
  const [shippingId, setShippingId] = useState("");
  const [payment, setPayment] = useState("whatsapp");

  const shipping = shippingRegions.find((r) => r.id === shippingId);
  const shippingCost = shipping ? shipping.cost : 0;
  const total = totalPrice + shippingCost;

  function handleChange(field) {
    return (e) => setCustomer((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const message = buildOrderMessage({
      items,
      customer,
      shippingRegion: shipping?.name,
      shippingCost,
      total
    });
    const link = buildWhatsappLink(message);
    window.open(link, "_blank");
    clearCart();
  }

  if (items.length === 0) {
    return <p className="text-meta text-sm">Keranjang kosong, tidak ada yang bisa di-checkout.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <div>
          <label className="text-sm text-title block mb-1">Nama</label>
          <input
            className="w-full border border-item-border rounded-md px-3 py-2 text-sm"
            value={customer.name}
            onChange={handleChange("name")}
            placeholder="Nama lengkap"
            required
          />
        </div>
        <div>
          <label className="text-sm text-title block mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-item-border rounded-md px-3 py-2 text-sm"
            value={customer.email}
            onChange={handleChange("email")}
            placeholder="Email"
          />
        </div>
        <div>
          <label className="text-sm text-title block mb-1">Nomor Telepon</label>
          <input
            className="w-full border border-item-border rounded-md px-3 py-2 text-sm"
            value={customer.phone}
            onChange={handleChange("phone")}
            placeholder="08xxxxxxxxxx"
            required
          />
        </div>
        <ShippingSelector value={shippingId} onChange={setShippingId} />
        <div>
          <label className="text-sm text-title block mb-1">Kode Pos</label>
          <input
            className="w-full border border-item-border rounded-md px-3 py-2 text-sm"
            value={customer.postcode}
            onChange={handleChange("postcode")}
            placeholder="Kode Pos"
          />
        </div>
        <PaymentMethod value={payment} onChange={setPayment} />
      </div>
      <div className="space-y-4">
        <OrderSummary items={items} shippingCost={shippingCost} total={total} />
        <Button type="submit" variant="primary" className="w-full">
          Pesan via WhatsApp
        </Button>
      </div>
    </form>
  );
}

