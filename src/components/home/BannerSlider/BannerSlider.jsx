import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banners from "../../../data/banners.js";

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % banners.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="slideHome" className="relative overflow-hidden rounded-lg my-4">
      <div className="relative aspect-[3/1] bg-headerMenu">
        {banners.map((banner, i) => (
          <Link
            key={banner.id}
            to={banner.link}
            className={\`absolute inset-0 transition-opacity duration-500 \${
              i === index ? "opacity-100" : "opacity-0"
            }\`}
          >
            <img src={banner.image} alt={banner.alt} className="w-full h-full object-cover" />
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-1.5 mt-2">
        {banners.map((banner, i) => (
          <button
            key={banner.id}
            onClick={() => setIndex(i)}
            className={\`w-2 h-2 rounded-full \${i === index ? "bg-main" : "bg-item-border"}\`}
            aria-label={\`Slide \${i + 1}\`}
          />
        ))}
      </div>
    </section>
  );
}

