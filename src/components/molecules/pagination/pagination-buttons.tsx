import ActiveLink from "@/components/atoms/navbar/active-link";
import PreviousButton from "@/components/atoms/pagination/previous-button";
import NextButton from "@/components/atoms/pagination/next-button";

const PaginationButtons = ({
  from,
  to,
  current,
  href,
  className = "w-12 justify-center relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
  activeClassName = "w-12 justify-center relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
}: {
  from: number;
  to: number;
  current: number;
  href: PaginationSupportedRoutes;
  className?: string;
  activeClassName?: string;
}) => {
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, k) => k + start);

  let buttons: number[] = [];

  if (to - from + 1 <= 7) {
    buttons = range(from, to);
  } else {
    if (current - from <= 3) {
      buttons = [...range(from, from + 4), -1, to];
    } else if (to - current <= 3) {
      buttons = [from, -1, ...range(to - 4, to)];
    } else {
      buttons = [from, -1, ...range(current - 1, current + 1), -1, to];
    }
  }

  return (
    <div aria-label="pagination">
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <PreviousButton href={href} />
        {buttons.map((button) =>
          button === -1 ? (
            <div
              key={button}
              className="relative inline-flex w-12 items-center justify-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span>...</span>
            </div>
          ) : (
            <ActiveLink
              key={button}
              href={`${href}/${button}`}
              className={className}
              activeClassName={activeClassName}
              exact
              // eslint-disable-next-line
              // @ts-ignore
              scroll={false}
            >
              {button === -1 ? "..." : button}
            </ActiveLink>
          ),
        )}
        <NextButton href={href} max={to} />
      </nav>
    </div>
  );
};

export default PaginationButtons;
