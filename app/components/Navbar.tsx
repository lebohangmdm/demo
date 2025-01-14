"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ServicesNavLinks from "@/app/components/ServicesNavLinks";
import Menu from "@/app/components/Menu";
import Logo from "./Logo";
import CompanyNavLink from "@/app/components/CompanyNavLink";

const Navbar = () => {
  return (
    <nav className="relative main-container h-14 sm:h-16 lg:h-20">
      <div className="flex items-center justify-between">
        <Logo width={250} height={250} />
        <div className="hidden lg:flex items-center lg:gap-8 xl:gap-10">
          <CompanyNavLink />
          <ServicesNavLinks />
          <Button
            variant={"default"}
            className="py-4 px-4 font-semibold hover:bg-black rounded-none  transition-all duration-200 "
            size={"lg"}
            asChild
          >
            <Link href={"/contact-us"}>Get a Quote</Link>
          </Button>
        </div>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
