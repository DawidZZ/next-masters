import SearchBox from "../atoms/search/search-box";
import Links from "../molecules/navbar/links";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 min-w-full bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <Links />
          <SearchBox />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
