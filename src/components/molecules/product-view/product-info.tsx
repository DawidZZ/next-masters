import AddToCartForm from "@/components/atoms/product-view/product-add-to-cart-form";
import ProductDetails from "@/components/atoms/product-view/product-details";
import Rating from "@/components/atoms/product-view/rating";

const ProductInfo = ({
  title,
  price,
  description,
  longDescription,
  rating,
}: {
  title: string;
  price: number;
  description: string;
  longDescription: string;
  rating: { rate: number; count: number };
}) => {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
      </div>

      {/* Options */}
      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight text-gray-900">${price}</p>

        <Rating rate={rating.rate} count={rating.count} />

        <AddToCartForm />
      </div>

      <ProductDetails description={description} longDescription={longDescription} />
    </div>
  );
};

export default ProductInfo;
