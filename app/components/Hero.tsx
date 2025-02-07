import { Button } from "@/components/ui/button";
import Link from "next/link";
import hero from "@/public/images/hero.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[cal(100dvh - 100px)] w-screen">
      <div className="absolute inset-0 ">
        <Image
          src={hero}
          alt="Hero Background"
          layout="fill"
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={90}
          priority={true}
        />
      </div>
      <div
        className="absolute inset-0 bg-black bg-opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(50, 130, 246, 0.35), rgba(21, 64, 134, 0.2))",
        }}
      ></div>
      <div className="relative section-container flex items-center">
        <div className="w-full sm:w-5/6  md:w-8/12 lg:w-7/12 xl:w-1/2  text-white">
          <h1 className="text-2xl font-roboto md:text-4xl lg:text-5xl font-bold leading-tight">
            Precision Engineering for Reliable Motors & Commutators
          </h1>
          {/* <div className="my-2 bg-black/40 p-2"> */}
          <p className="mt-6 text-sm md:text-base md:mt-8 lg:text-lg">
            We design, manufacture, and repair high-performance motors and
            commutators, providing durable, reliable solutions for industrial,
            commercial, and custom applications with a focus on quality and
            expertise.
          </p>
          {/* </div> */}
          <Button
            variant={"default"}
            className="mt-4 rounded-none md:mt-6 py-2 px-4 text-base   lg:py-3 lg:px-6 lg:text-lg font-semibold tracking-wider  hover:bg-black  transition-all duration-200 "
            size={"lg"}
            asChild
          >
            <Link href={"/contact-us"}>Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
