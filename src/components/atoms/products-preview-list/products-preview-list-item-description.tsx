import Link from "next/link";

const ListItemDescription = ({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: number;
}) => {
  return (
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <Link href="#">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">${price}</p>
    </div>
  );
};

export default ListItemDescription;
