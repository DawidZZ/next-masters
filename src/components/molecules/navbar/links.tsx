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
          <ActiveLink href="/categories/t-shirts">T-Shirts</ActiveLink>
          <ActiveLink href="/categories/hoodies">Hoodies</ActiveLink>
          <ActiveLink href="/categories/accessories">Accessories</ActiveLink>
          <ActiveLink href="/cart">Cart</ActiveLink>
        </div>
      </div>
    </div>
  );
};

export default Links;
