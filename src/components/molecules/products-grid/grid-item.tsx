import Link from "next/link";

const GridItem = ({ product: { id, image, description, price, title } }: { product: Product }) => {
  return (
    <Link href={`/products/${id}`} className="group">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 p-2">
        <img
          src={image}
          alt={description}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <h3 className="flex flex-col justify-center text-sm text-gray-700">{title}</h3>
        <p className="flex-coltext-lg flex justify-center font-medium text-gray-900">${price}</p>
      </div>
    </Link>
  );
};

export default GridItem;
