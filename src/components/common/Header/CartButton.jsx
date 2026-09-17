import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart.js";

export default function CartButton() {
  const { totalItems } = useCart();
  return (
    <Link to="/keranjang" className="relative px-2" title="Keranjang Belanja">
      🛒
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-notif text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
}

