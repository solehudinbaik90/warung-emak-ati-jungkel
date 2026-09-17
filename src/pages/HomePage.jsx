import BannerSlider from "../components/home/BannerSlider/BannerSlider.jsx";
import CategoryIcons from "../components/home/CategoryIcons/CategoryIcons.jsx";
import FlashSale from "../components/home/FlashSale/FlashSale.jsx";
import ProductSection from "../components/home/ProductSection/ProductSection.jsx";
import PromoBanner from "../components/home/PromoBanner/PromoBanner.jsx";

export default function HomePage() {
  return (
    <div>
      <BannerSlider />
      <CategoryIcons />
      <FlashSale />
      <PromoBanner />
      <ProductSection title="Produk Populer" />
      <ProductSection title="Terlaris Minggu Ini" limit={4} />
    </div>
  );
}
