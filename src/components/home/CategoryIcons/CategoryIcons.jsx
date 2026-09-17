import { Link } from "react-router-dom";
import categories from "../../../data/categories.js";

export default function CategoryIcons() {
  return (
    <section className="grid grid-cols-4 md:grid-cols-8 gap-3 my-4">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          to={\`/kategori/\${cat.id}\`}
          className="flex flex-col items-center gap-1 text-center p-2 rounded-md hover:bg-headerMenu"
        >
          <span className="text-2xl">{cat.icon}</span>
          <span className="text-xs text-title">{cat.name}</span>
        </Link>
      ))}
    </section>
  );
}

