import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl font-bold text-title mb-2">404</h1>
      <p className="text-meta mb-4">Halaman yang kamu cari tidak ditemukan.</p>
      <Link to="/" className="text-main font-medium">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
