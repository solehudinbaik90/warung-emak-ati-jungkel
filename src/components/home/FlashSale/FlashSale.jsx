import { useEffect, useState } from "react";
import ProductSection from "../ProductSection/ProductSection.jsx";

function getRemaining(target) {
  const distance = target - Date.now();
  if (distance <= 0) return null;
  return {
    hours: Math.floor(distance / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000)
  };
}

export default function FlashSale({ endDate = "2026-12-31T22:43:25" }) {
  const target = new Date(endDate).getTime();
  const [remaining, setRemaining] = useState(() => getRemaining(target));

  useEffect(() => {
    const timer = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <section className="my-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-title">⚡ Flash Sale</h2>
        <span className="text-sm text-price">
          {remaining
            ? `Berakhir dalam ${remaining.hours} Jam : ${remaining.minutes} Menit : ${remaining.seconds}s`
            : "Sudah Berakhir"}
        </span>
      </div>
      <ProductSection title={null} categoryFilter={null} limit={4} showDiscountedOnly />
    </section>
  );
}
