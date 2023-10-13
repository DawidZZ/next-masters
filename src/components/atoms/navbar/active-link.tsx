"use client";

import Link from "next/link";
import { type Route } from "next";
import React from "react";
import { usePathname } from "next/navigation";

const ActiveLink = <T extends string>({
  href,
  children,
  className = "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
  activeClassName = "rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white",
}: {
  href: Route<T> | URL;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      {isActive ? (
        <Link href={href} className={activeClassName} aria-current>
          {children}
        </Link>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </>
  );
};

export default ActiveLink;
