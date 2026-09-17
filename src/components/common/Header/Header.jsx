import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import CartButton from "./CartButton.jsx";
import NotificationButton from "./NotificationButton.jsx";
import { useAppContext } from "../../../context/AppContext.jsx";
import categories from "../../../data/categories.js";

export default function Header() {
  const { storeName } = useAppContext();
  return (
    <header
      id="header-wrapper"
      className="sticky top-0 z-40 bg-headerBg border-b border-headerBorder shadow-sm"
    >
      <div className="container-page flex items-center h-16">
        <Link to="/" className="font-bold text-xl text-main mr-4">
          {storeName}
        </Link>
        <SearchBar />
        <div className="hidden lg:flex items-center gap-1 mr-4 relative group">
          <span className="text-sm text-menuFont cursor-pointer">Kategori ▾</span>
          <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-card border border-item-border rounded-md py-2 w-56 z-50">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={\`/kategori/\${cat.id}\`}
                className="flex justify-between px-4 py-1.5 text-sm text-title hover:bg-headerMenu"
              >
                <span>{cat.icon} {cat.name}</span>
                <span className="text-meta">{cat.count}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 ml-auto text-lg">
          <NotificationButton />
          <CartButton />
        </div>
      </div>
    </header>
  );
}
