import ProductImageGallery from "../atoms/product-view/product-image-gallery";
import ProductInfo from "../molecules/product-view/product-info";

const ProductView = ({
  product: { name, description, price, images, reviews },
}: {
  product: Product;
}) => {
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
    </div>
  );
};

export default ProductView;
