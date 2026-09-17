import { Link } from "react-router-dom";

export default function PromoBanner({ title = "Kejar Diskon", to = "/kategori/hijab" }) {
  return (
    <Link
      to={to}
      className="block rounded-lg p-6 my-6 text-white"
      style={{
        background: "linear-gradient(90deg, var(--sale-bg-left), var(--sale-bg-right))"
      }}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm opacity-90">Belanja makin hemat dengan bebas ongkir hingga Rp40.000</p>
    </Link>
  );
}

