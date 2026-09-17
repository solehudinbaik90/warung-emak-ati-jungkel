import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim()) navigate(\`/cari?q=\${encodeURIComponent(query.trim())}\`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex-1 max-w-xl mx-4 hidden md:flex">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari produk di Warung Emak Ati..."
        className="w-full border border-[var(--search-border)] rounded-l-md px-3 py-2 text-sm outline-none focus:border-main"
      />
      <button
        type="submit"
        className="bg-headerMenu border border-[var(--search-border)] border-l-0 rounded-r-md px-3 text-[var(--search-button)]"
        aria-label="Cari"
      >
        🔍
      </button>
    </form>
  );
}
