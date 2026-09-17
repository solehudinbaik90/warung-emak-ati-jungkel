import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../services/productService.js";
import ProductDetail from "../components/product/ProductDetail/ProductDetail.jsx";
import RelatedProducts from "../components/product/RelatedProducts/RelatedProducts.jsx";
import LoadingSpinner from "../components/common/LoadingSpinner/LoadingSpinner.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(undefined);
    getProductBySlug(slug).then(setProduct);
  }, [slug]);

  if (product === undefined) return <LoadingSpinner />;
  if (product === null) return <NotFoundPage />;

  return (
    <div>
      <ProductDetail product={product} />
      <RelatedProducts product={product} />
    </div>
  );
}
