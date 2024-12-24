import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Menu from "@/app/components/Menu";

const Navbar = () => {
  return (
    <nav className="relative main-container py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl">Logo</div>
        <div className="hidden lg:flex items-center gap-12">
          <Link href={"/"} className="nav-link">
            Home
          </Link>
          <Link href={"#about"} className="nav-link">
            About us
          </Link>
          <NavLinks />
          <Link href={"#contact"} className="nav-link">
            Why Choose Us
          </Link>
          <Button
            variant={"default"}
            className="py-4 px-4 font-semibold hover:bg-black rounded-none  transition-all duration-200 "
            size={"lg"}
            asChild
          >
            <Link href={"#contact"}>Get a Quote</Link>
          </Button>
        </div>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
