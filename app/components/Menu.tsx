"use client";

import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const components = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="block z-30 lg:hidden">
      <Button
        variant={"default"}
        size={"icon"}
        className="bg-blue-500 text-white p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <X size={24} /> : <MenuIcon size={24} />}
      </Button>
      <div
        className={`
          absolute top-full left-0 w-full bg-white shadow-lg rounded-md 
          origin-top transform transition-all duration-500 ease-out
          ${
            showMenu
              ? "opacity-100 scale-y-100 translate-y-0 visible"
              : "opacity-0 scale-y-0 -translate-y-4 invisible"
          }
          overflow-hidden
        `}
      >
        <ul className="p-4 flex flex-col gap-1 divide-y divide-black">
          {components.map((component) => {
            return (
              <li key={component.title} className="w-full">
                <Link
                  href={component.href}
                  className="block py-4 text-base cursor-pointer font-medium uppercase hover:text-blue-600 transition-all duration-150"
                >
                  {component.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
