import { Factory, PhoneCall, Timer, Wrench } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const Partner = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl text-blue-500 font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Why Partner With Us
        </h2>
        <p className="text-sm sm:text-base">
          We uphold a strict <strong>No-Compromise Policy</strong> on Service
          Delivery. Our mission is to leverage our expertise to drive our
          customers&apos; success by maintaining unwavering commitment to:
        </p>
      </div>

      <div className="mt-6 md:mt-12 grid  sm:grid-cols-2 gap-12  lg:grid-cols-4">
        <div className="p-2">
          <div className="p-2.5 bg-blue-500 rounded-full inline-flex">
            <Factory className="h-6 w-6 text-white" />
          </div>
          <p className="mt-2  md:mt-4  mb-2 text-base md:text-lg font-semibold capitalize">
            Industry Expertise
          </p>
          <p className="text-sm sm:text-base">
            Proven experience delivering high-quality, reliable products for
            various industrial applications.
          </p>
        </div>
        <div className="p-2">
          <div className="p-2.5 bg-blue-500 rounded-full inline-flex">
            <Wrench className="h-6 w-6 text-white" />
          </div>
          <p className="mt-2 md:mt-4 mb-2 text-base md:text-lg font-semibold capitalize">
            Customized Solutions
          </p>
          <p className="text-sm sm:text-base">
            Tailored products designed to meet your unique requirements and
            application needs.
          </p>
        </div>
        <div className="p-2">
          <div className="p-2.5 bg-blue-500 rounded-full inline-flex">
            <PhoneCall className="h-6 w-6 text-white" />
          </div>
          <p className="mt-2  md:mt-4  mb-2 text-base md:text-lg font-semibold capitalize">
            Customer Support
          </p>
          <p className="text-sm sm:text-base">
            Dedicated technical assistance and guidance to ensure smooth
            operation and minimal downtime.
          </p>
        </div>
        <div className="p-2 ">
          <div className="p-2.5 bg-blue-500 rounded-full inline-flex">
            <Timer className="h-6 w-6 text-white" />
          </div>
          <p className="mt-2  md:mt-4  mb-2 text-base md:text-lg font-semibold capitalize">
            Timely Delivery
          </p>
          <p className="text-sm sm:text-base">
            Affordable, high-quality products delivered on time to keep your
            projects running smoothly.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Partner;
