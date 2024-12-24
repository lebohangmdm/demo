import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero relative z-0">
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="relative h-[calc(100dvh-24px)] section-container flex items-center">
        {/* Content Container */}
        <div className="w-full sm:w-5/6  md:w-8/12 lg:w-7/12 xl:w-1/2  text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Precision Engineering for Reliable Motors & Commutators
          </h1>
          <p className="mt-6 md:text-base md:mt-8 lg:text-lg">
            We specialize in the design, manufacturing, and repair of
            high-performance motors and commutators. With unmatched expertise
            and a commitment to quality, we deliver durable, efficient, and
            reliable solutions for industrial, commercial, and custom
            applications. Trust us to keep your operations running smoothly
          </p>
          <Button
            variant={"default"}
            className="mt-4 rounded-none md:mt-6 py-2 px-4 text-base   lg:py-3 lg:px-6 lg:text-lg font-semibold tracking-wider  hover:bg-black  transition-all duration-200 "
            size={"lg"}
            asChild
          >
            <Link href={"#contact"}>Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
