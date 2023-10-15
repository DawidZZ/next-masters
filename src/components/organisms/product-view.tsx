import { Suspense } from "react";
import ProductImageGallery from "../atoms/product-view/product-image-gallery";
import ProductInfo from "../molecules/product-view/product-info";
import RelatedProducts from "../molecules/product-view/related-products";
import Spinner from "../atoms/shared/spinner";

const ProductView = ({ product }: { product: Product }) => {
  const { name, description, price, images, reviews } = product;
  const safeReveiews = reviews ?? [];
  const count = safeReveiews.length;
  const rate = safeReveiews.reduce((acc, review) => acc + review.rating, 0) / safeReveiews.length;

  return (
    <div className="bg-white">
      <div className="pt-6">
        <ProductImageGallery images={images} description={description} />

        <ProductInfo
          title={name}
          price={price}
          description={description}
          rating={{ rate, count }}
        />
      </div>
      <div data-testid="related-products">
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
      </div>
    </div>
  );
};

export default ProductView;
