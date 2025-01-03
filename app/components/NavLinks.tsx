"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const components = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className="relative inline-block z-30"
      onMouseEnter={() => setIsOpen(true)} // Show on hover
      onMouseLeave={() => setIsOpen(false)} // Hide on mouse leave
    >
      <Button
        variant={"ghost"}
        onClick={toggleMenu} // Toggle on click
        className="relative nav-link hover:text-blue-500"
      >
        Services <ChevronDown />
      </Button>

      {isOpen && (
        <ul
          className={`absolute bg-white flex flex-col gap-2 w-[250px] p-4 shadow-lg 
            transition-all duration-300 ease-in-out 
            ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
            origin-top`}
        >
          {components.map((component) => (
            <Link
              href={component.href}
              key={component.title}
              className="font-medium hover:text-blue-500 transition-colors duration-150"
            >
              {component.title}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
