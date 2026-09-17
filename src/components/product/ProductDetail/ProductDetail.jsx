import { useState } from "react";
import ProductInfo from "../ProductInfo/ProductInfo.jsx";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import Button from "../../common/Button/Button.jsx";
import { useCart } from "../../../hooks/useCart.js";
import { useNavigate } from "react-router-dom";

export default function ProductDetail({ product }) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const navigate = useNavigate();

  function handleAddToCart() {
    addItem(product, qty);
  }

  function handleBuyNow() {
    addItem(product, qty);
    navigate("/checkout");
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="aspect-square bg-headerMenu rounded-md overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <ProductInfo product={product} />
        <div className="mt-4">
          <p className="text-sm text-title mb-1">Jumlah</p>
          <QuantitySelector qty={qty} onChange={setQty} />
        </div>
        <div className="mt-5 flex gap-3">
          <Button variant="outline" onClick={handleAddToCart}>
            + Keranjang
          </Button>
          <Button variant="primary" onClick={handleBuyNow}>
            Beli Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
}

