import ProductImageGallery from "../atoms/product-view/product-image-gallery";
import ProductInfo from "../molecules/product-view/product-info";

const ProductView = ({
  product: { title, description, price, image, longDescription, rating },
}: {
  product: Product;
}) => {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <ProductImageGallery image={image} description={description} />

        <ProductInfo
          title={title}
          price={price}
          description={description}
          longDescription={longDescription}
          rating={rating}
        />
      </div>
    </div>
  );
};

export default ProductView;
