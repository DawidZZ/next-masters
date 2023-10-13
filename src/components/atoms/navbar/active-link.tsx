"use client";

import Link from "next/link";
import { type Route } from "next";
import React from "react";
import { usePathname } from "next/navigation";

const ActiveLink = <T extends string>({
  href,
  children,
  className = "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
  activeClassName = "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white",
}: {
  href: Route<T> | URL;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    setIsActive(href === pathname);
  }, [pathname]);

  return (
    <Link href={href} className={isActive ? activeClassName : className} aria-current={isActive}>
      {children}
    </Link>
  );
};

export default ActiveLink;
