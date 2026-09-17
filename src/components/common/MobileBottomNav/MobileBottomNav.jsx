import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../../hooks/useCart.js";

const navItems = [
  { to: "/", label: "Beranda", icon: "🏠" },
  { to: "/kategori/adidas", label: "Kategori", icon: "🗂️" },
  { to: "/keranjang", label: "Keranjang", icon: "🛒" },
  { to: "/cari", label: "Cari", icon: "🔍" }
];

export default function MobileBottomNav() {
  const { pathname } = useLocation();
  const { totalItems } = useCart();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-item-border flex md:hidden">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={\`flex-1 flex flex-col items-center py-2 text-xs relative \${
            pathname === item.to ? "text-main" : "text-menuFont"
          }\`}
        >
          <span className="text-lg">{item.icon}</span>
          {item.to === "/keranjang" && totalItems > 0 && (
            <span className="absolute top-1 right-6 bg-notif text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

