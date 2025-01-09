"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Menu from "@/app/components/Menu";
import Logo from "./Logo";
// import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <nav className="relative main-container h-14 sm:h-16 lg:h-20">
      <div className="flex items-center justify-between">
        <Logo width={250} height={250} />
        <div className="hidden lg:flex items-center lg:gap-8 xl:gap-12">
          <Link href={"/"} className="nav-link">
            Home
          </Link>
          <Link href={"/#about"} className="nav-link">
            About us
          </Link>
          <NavLinks />
          <Link href={"/#why-choose-us"} className="nav-link">
            Why Choose Us
          </Link>
          <Button
            variant={"default"}
            className="py-4 px-4 font-semibold hover:bg-black rounded-none  transition-all duration-200 "
            size={"lg"}
            asChild
          >
            <Link href={"/#contact"}>Get a Quote</Link>
          </Button>
        </div>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
