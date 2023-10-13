import ListItem from "../molecules/products-preview-list/list-item";

const ProductsPreviewList = ({ products }: { products: Product[] }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <ul
          data-testid="products-list"
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {products.map((product) => (
            <li className="group relative" key={product.id}>
              <ListItem product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsPreviewList;
