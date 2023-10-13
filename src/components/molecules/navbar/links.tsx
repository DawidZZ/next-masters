"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import ActiveLink from "@/components/atoms/navbar/active-link";
import { type NavLink } from "@/types/navbar";

const links: NavLink[] = [
  { href: "/", text: "Home" },
  { href: "/products", text: "All" },
];

const Links = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<NavLink>(
    links.find((link) => link.href === pathname) ?? links[0],
  );

  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {links.map((link) => (
            <ActiveLink
              key={link.href}
              {...link}
              isActive={link === activeLink}
              onClick={() => setActiveLink(link)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;
