import Image from "next/image";
import React from "react";
import img from "@/public/images/Picture4-1.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const Story = () => {
  return (
    <SectionWrapper>
      <div className="mt-4 grid gap-12 md:gap-14 lg:grid-cols-[60%_40%]">
        <div className="space-y-8 ">
          <h2 className="text-xl text-blue-500 capitalize font-semibold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Get to know us
          </h2>
          <div className="space-y-4 max-w-xl  md:max-w-3xl  text-sm leading-6 md:text-base lg:text-lg">
            <p>
              Nisida is a trusted industry leader providing top-quality motor
              and generator services tailored to meet the specific needs of
              corporations. From expert repairs and thorough maintenance to
              supplying new motors, we customize our solutions to match the
              scale and demands of your business.
            </p>
            <p>
              We service electrical rotating equipment of all sizes, ensuring
              seamless and efficient operations. No matter the complexity of the
              task, Nisida delivers precise, reliable service—giving you peace
              of mind and improved operational performance.
            </p>
          </div>

          <Button
            variant={"default"}
            className=" rounded-none py-2 px-4 text-base h-10  lg:h-12 lg:py-4 lg:px-6 lg:text-lg font-semibold tracking-wider  hover:bg-black  transition-all duration-200 "
            size={"lg"}
            asChild
          >
            <Link href={"/about-us"}>
              More About Us <MoveRight />
            </Link>
          </Button>
        </div>
        <div className="relative ">
          <Image
            src={img}
            alt="about-img"
            style={{ objectFit: "cover", objectPosition: "right" }}
            className="object-cover hidden sm:block sm:h-60 md:h-72 lg:h-full w-full"
            quality={90}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Story;
