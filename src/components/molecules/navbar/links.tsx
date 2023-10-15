import ActiveLink from "@/components/atoms/shared/active-link";

const Links = () => {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          <ActiveLink exact href="/">
            Home
          </ActiveLink>
          <ActiveLink href="/products">All</ActiveLink>
          <ActiveLink href="/categories">Categories</ActiveLink>
        </div>
      </div>
    </div>
  );
};

export default Links;
