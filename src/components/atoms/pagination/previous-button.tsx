"use client";

import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useParams } from "next/navigation";

const PreviousButton = ({ href }: { href: PaginationSupportedRoutes }) => {
  const { page } = useParams();

  return (
    <>
      {Number(page) <= 1 ? (
        <div className="ring-gray-30 relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-200 ring-1 ring-inset focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </div>
      ) : (
        <Link
          href={`${href}/${Number(page) - 1}`}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          scroll={false}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
      )}
    </>
  );
};

export default PreviousButton;
