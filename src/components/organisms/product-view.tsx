import { Suspense } from "react";
import ProductImageGallery from "../atoms/product-view/product-image-gallery";
import ProductInfo from "../molecules/product-view/product-info";
import RelatedProducts from "../molecules/product-view/related-products";
import Spinner from "../atoms/shared/spinner";
import ReviewForm from "./review-form";

const ProductView = ({ product }: { product: Product }) => {
  const { name, description, price, images, reviews } = product;
  const safeReviews = reviews ?? [];
  const count = safeReviews.length;
  const rate = safeReviews.reduce((acc, review) => acc + review.rating, 0) / safeReviews.length;

  return (
    <div className="bg-white">
      <div className="pt-6">
        <ProductImageGallery images={images} description={description} />

        <ProductInfo
          id={product.id}
          title={name}
          price={price}
          description={description}
          rating={{ rate, count }}
        />
      </div>
      <div>
        <h2 className="pl-10  text-lg font-bold tracking-tight text-gray-900 sm:text-3xl">
          Others from this category
        </h2>
        <Suspense
          fallback={
            <div className="flex items-center justify-center bg-white">
              <Spinner color="#6366f1" />
            </div>
          }
        >
          <RelatedProducts product={product} />
        </Suspense>
        <ReviewForm productId={product.id} />
      </div>
    </div>
  );
};

export default ProductView;
