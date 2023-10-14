import PaginationButtons from "../molecules/pagination/pagination-buttons";

const Pagination = ({
  href,
  from,
  to,
  current = 1,
}: {
  href: PaginationSupportedRoutes;
  from: number;
  to: number;
  current?: number;
}) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{(current - 1) * 20}</span> to{" "}
            <span className="font-medium">{current * 20}</span> of{" "}
            <span className="font-medium">{to * 20}</span> results
          </p>
        </div>
        <PaginationButtons from={from} to={to} href={href} current={current} />
      </div>
    </div>
  );
};

export default Pagination;
