"use client";

import Link from "next/link";

const ActiveLink = ({
  link: { href, text },
  className = "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
  activeClassName = "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white",
  isActive,
  onClick,
}: {
  link: Link;
  className?: string;
  activeClassName?: string;
  isActive: boolean;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      className={isActive ? activeClassName : className}
      aria-current={isActive}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default ActiveLink;
