import Image from "next/image";
import React from "react";
import img from "@/public/images/about.jpg";
import { CircleCheckBig } from "lucide-react";
import { additionalServices, facilities, ranges } from "@/lib/data";
import SectionWrapper from "../components/SectionWrapper";

const page = () => {
  return (
    <SectionWrapper delay={0.3}>
      <div className="mt-4 md:mt-6 grid gap-12  md:gap-14 md:grid-cols-[1.5fr_1fr] lg:gap-16 xl:grid-cols-2">
        <div className="w-full flex flex-col gap-4 ">
          <h2 className="text-xl text-blue-500 font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            About us
          </h2>
          <p className="max-w-xl  md:max-w-3xl  text-sm leading-6 md:text-base xl:leading-7 xl:text-lg ">
            Nisida, a Level 1 BEE-rated company based in Industria,
            Johannesburg, specializes in AC and DC motor repairs, servo and
            stepper motsor repairs, and custom motor design and manufacturing.
          </p>
          <p className="max-w-xl md:max-w-3xl text-sm leading-6 md:text-base xl:leading-7 xl:text-lg">
            We excel in upgrading existing motors, designing and reconditioning
            commutators, slip rings, and brush holders, and providing armature
            and field coil manufacturing and repair services, ensuring top-tier
            quality and reliability for our clients.
          </p>
        </div>
        <div className="">
          <Image
            src={img}
            alt="about-img"
            style={{ objectFit: "cover" }}
            className="object-cover h-52 md:h-full mx-auto"
            quality={90}
          />
        </div>
      </div>
      <div className="mt-8 md:mt-12 lg:mt-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-sm uppercase  font-semibold  md:text-base">
              Facilities Include:
            </h4>
            <ul className="flex flex-col gap-2 md:gap-3 lg:gap-4">
              {facilities.map((facility) => {
                return (
                  <li key={facility.id} className="flex items-center gap-2">
                    <CircleCheckBig className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
                    <span className="text-sm lg:text-base">
                      {facility.description}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 md:space-y-8">
              <h4 className="text-sm uppercase  font-semibold  md:text-base">
                Range:
              </h4>
              <ul className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                {ranges.map((range) => {
                  return (
                    <li key={range.id} className="flex items-center gap-2">
                      <CircleCheckBig className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
                      <span className="text-sm lg:text-base">
                        {range.description}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-sm uppercase  font-semibold  md:text-base">
                Additional Services:
              </h4>
              <ul className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                {additionalServices.map((service) => {
                  return (
                    <li key={service.id} className="flex items-center gap-2">
                      <CircleCheckBig className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
                      <span className="text-sm lg:text-base">
                        {service.description}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default page;
