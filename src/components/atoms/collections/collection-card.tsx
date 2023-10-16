import Link from "next/link";

const CollectionCard = ({ name, slug }: { name: string; slug: string }) => {
  return (
    <Link href={`/collections/${slug}`} className="w-1/5">
      <div className="w-full transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:underline">
        <div className="flex items-center justify-center gap-3 whitespace-nowrap rounded-md bg-slate-200 p-8 text-2xl text-gray-800">
          <p className="">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
