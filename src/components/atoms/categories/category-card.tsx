import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const CategoryCard = ({ name, slug }: { name: string; slug: string }) => {
  return (
    <Link href={`/categories/${slug}/1`} passHref>
      <div className="transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110">
        <div
          className="flex items-center justify-between gap-3 rounded-md p-8"
          style={{ backgroundColor: "#edf2f7" }}
        >
          <p className="whitespace-nowrap text-2xl text-gray-800">{name}</p> <ArrowRightIcon />{" "}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
