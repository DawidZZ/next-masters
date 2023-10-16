import PaginationButtons from "../molecules/pagination/pagination-buttons";

const Pagination = ({
  href,
  current = 1,
  count = 4,
  total = 14,
}: {
  href: PaginationSupportedRoutes;
  current?: number;
  count: number;
  total: number;
}) => {
  const to = Math.ceil(total / count);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{(current - 1) * count}</span> to{" "}
            <span className="font-medium">{Math.min(current * count, total)}</span> of{" "}
            <span className="font-medium">{Math.min(to * count, total)}</span> results
          </p>
        </div>
        <PaginationButtons from={1} to={to} href={href} current={current} />
      </div>
    </div>
  );
};

export default Pagination;
