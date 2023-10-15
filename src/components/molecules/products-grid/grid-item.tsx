import Link from "next/link";

const GridItem = ({ product: { id, images, description, price, name } }: { product: Product }) => {
  return (
    <Link href={`/product/${id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200 p-2">
        <img
          src={images[0].url}
          alt={description}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <h3 className="flex flex-col justify-center text-sm text-gray-700">{name}</h3>
        <p className="flex-coltext-lg flex justify-center font-medium text-gray-900">
          ${price / 100}
        </p>
      </div>
    </Link>
  );
};

export default GridItem;
