"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyLinks } from "@/lib/links";

const CompanyNavLink = () => {
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
        Company <ChevronDown />
      </Button>

      {isOpen && (
        <ul
          className={`absolute bg-white flex flex-col gap-2.5 w-[250px] p-4 shadow-lg 
            transition-all duration-300 ease-in-out 
            ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
            origin-top`}
        >
          {companyLinks.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="font-medium text-sm hover:text-blue-500 transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompanyNavLink;
