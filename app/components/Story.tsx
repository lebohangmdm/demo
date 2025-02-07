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
          <h2 className="text-xl text-blue-500 capitalize font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            Get to know us
          </h2>
          <div className="space-y-4 max-w-xl  md:max-w-3xl  text-sm leading-6 md:text-base ">
            <p>
              As a trusted industry leader, Renown is dedicated to meeting the
              specific needs of many corporations like yours with our top-notch
              motor and generator services. Whether it’s expert repairs,
              thorough maintenance, or providing new motors, we tailor our
              offerings to match the scale and demands of your enterprise.
            </p>
            <p>
              From small to large electrical rotating equipment, we guarantee a
              seamless experience for your operations. No matter how big or
              complex the task, Renown is committed to delivering unmatched
              service with precision and care. Choose Renown as your reliable
              partner and experience the peace of mind and operational
              efficiency that comes with our industry expertise.
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
