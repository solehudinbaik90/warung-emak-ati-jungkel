import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext.jsx";

export default function Footer() {
  const { storeName } = useAppContext();
  return (
    <footer className="bg-footerBackground border-t border-[var(--footer-line)] mt-10 pb-16 md:pb-0">
      <div className="container-page py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-title mb-2">{storeName}</h4>
          <p className="text-meta">
            Belanja online mudah dan hemat, transaksi langsung lewat WhatsApp.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-title mb-2">Menu</h4>
          <ul className="space-y-1 text-[var(--footer-text-link)]">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/kategori/adidas">Kategori Produk</Link></li>
            <li><Link to="/cari">Cari Produk</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-title mb-2">Bantuan</h4>
          <ul className="space-y-1 text-[var(--footer-text-link)]">
            <li><Link to="/checkout">Cara Checkout</Link></li>
            <li><Link to="/keranjang">Keranjang Belanja</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-title mb-2">Ikuti Kami</h4>
          <p className="text-meta">Instagram · Facebook · WhatsApp</p>
        </div>
      </div>
      <div className="text-center text-xs text-meta py-4 border-t border-[var(--footer-line)]">
        © {new Date().getFullYear()} {storeName}. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}

